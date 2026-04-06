"""ComfyUI extension entrypoint.

Keep this file limited to the public node mappings and web asset directory so
the package import path stays predictable for ComfyUI and tests.
"""

try:
    from .comfyui_pano_suite.nodes import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS
except ImportError:
    # Allow direct module loading in test runners without package context.
    from comfyui_pano_suite.nodes import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS

# ComfyUI recursively scans this directory for frontend assets.
WEB_DIRECTORY = "web"

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]
