import math
import numpy as np

from .math import DEG2RAD, dir_to_lon_lat, lon_lat_to_erp, sample_erp_bilinear, yaw_pitch_to_dir, orthonormal_basis_from_forward


def cutout_from_erp(
    erp_rgb: np.ndarray,
    yaw_deg: float,
    pitch_deg: float,
    h_fov_deg: float,
    v_fov_deg: float,
    roll_deg: float,
    out_w: int,
    out_h: int,
    coverage_deg: int = 360,
) -> np.ndarray:
    out_w = max(8, int(out_w))
    out_h = max(8, int(out_h))

    h_tan = math.tan(max(1e-3, h_fov_deg) * 0.5 * DEG2RAD)
    v_tan = math.tan(max(1e-3, v_fov_deg) * 0.5 * DEG2RAD)

    forward = yaw_pitch_to_dir(yaw_deg, pitch_deg)
    right, up, fwd = orthonormal_basis_from_forward(forward)

    xs = (np.arange(out_w, dtype=np.float32) + 0.5) / out_w * 2.0 - 1.0
    ys = 1.0 - (np.arange(out_h, dtype=np.float32) + 0.5) / out_h * 2.0
    xg, yg = np.meshgrid(xs, ys)

    x = xg * h_tan
    y = yg * v_tan

    if abs(roll_deg) > 1e-6:
        rr = roll_deg * DEG2RAD
        cr = math.cos(rr)
        sr = math.sin(rr)
        xr = x * cr - y * sr
        yr = x * sr + y * cr
        x, y = xr, yr

    dirs = fwd[None, None, :] + x[..., None] * right[None, None, :] + y[..., None] * up[None, None, :]
    norm = np.linalg.norm(dirs, axis=-1, keepdims=True)
    dirs = dirs / np.maximum(norm, 1e-8)

    lon, lat = dir_to_lon_lat(dirs)
    coverage = 180 if int(coverage_deg) == 180 else 360
    if coverage == 180:
        valid = np.abs(lon) <= (math.pi * 0.5)
        u = (lon / math.pi + 0.5) * erp_rgb.shape[1]
        v = (0.5 - (lat / math.pi)) * erp_rgb.shape[0]
        u = np.clip(u, 0.0, max(erp_rgb.shape[1] - 1.0, 0.0))
        v = np.clip(v, 0.0, max(erp_rgb.shape[0] - 1.0, 0.0))
        sampled = sample_erp_bilinear(erp_rgb, u, v).astype(np.float32)
        if sampled.ndim == 3:
            sampled[~valid] = 0.0
        return sampled

    u, v = lon_lat_to_erp(lon, lat, erp_rgb.shape[1], erp_rgb.shape[0])
    return sample_erp_bilinear(erp_rgb, u, v).astype(np.float32)
