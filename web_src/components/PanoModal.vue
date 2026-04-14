<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { ICON } from "../icons.js";
import PanoFloatingRight from "./PanoFloatingRight.vue";
import PanoPaintDock from "./PanoPaintDock.vue";
import PanoSidePanel from "./PanoSidePanel.vue";
import PanoToolRail from "./PanoToolRail.vue";
import PanoViewToggle from "./PanoViewToggle.vue";
import { buildModalShellPreset } from "../modal_shell_presets.js";

const props = defineProps({
  open: { type: Boolean, default: true },
  type: { type: String, default: "stickers" },
  readOnly: { type: Boolean, default: false },
  hideSidebar: { type: Boolean, default: false },
  nodeTitle: { type: String, default: "Panorama Stickers" },
  paintSwatches: { type: Array, default: () => [] },
  shellPreset: { type: Object, default: null },
});

const emit = defineEmits(["close"]);
let previousOverflow = "";
let didLockBody = false;
let previousFocusedElement = null;
const modalRef = ref(null);

const previewMode = computed(() => props.readOnly === true);
const shellPreset = computed(() => props.shellPreset || buildModalShellPreset(props.type));
const floatingButtons = computed(() => {
  const base = Array.isArray(shellPreset.value?.floatingButtons) ? shellPreset.value.floatingButtons.slice() : [];
  if (previewMode.value) {
    base.push({
      action: "toggle-fullscreen",
      label: "Fullscreen",
      tip: "Fullscreen",
      pressed: null,
      icon: ICON.fullscreen,
    });
  }
  return base;
});

function getFocusableElements() {
  const modalEl = modalRef.value;
  if (!modalEl) return [];
  return Array.from(modalEl.querySelectorAll(
    "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])",
  )).filter((el) => {
    if (!(el instanceof HTMLElement)) return false;
    return !el.hidden && el.tabIndex >= 0 && el.offsetParent !== null;
  });
}

function focusModal() {
  const focusables = getFocusableElements();
  const target = focusables[0] || modalRef.value;
  target?.focus?.();
}

function restorePreviousFocus() {
  if (previousFocusedElement?.isConnected) previousFocusedElement.focus?.();
  previousFocusedElement = null;
}

function onKeydown(event) {
  if (event.defaultPrevented) return;
  if (event.key === "Tab") {
    const focusables = getFocusableElements();
    if (!focusables.length) {
      event.preventDefault();
      modalRef.value?.focus?.();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (event.shiftKey) {
      if (active === first || active === modalRef.value || !modalRef.value?.contains(active)) {
        event.preventDefault();
        last.focus();
      }
      return;
    }
    if (active === last || !modalRef.value?.contains(active)) {
      event.preventDefault();
      first.focus();
    }
    return;
  }
  if (event.key === "Escape") emit("close");
}

function lockBody() {
  if (didLockBody) return;
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  didLockBody = true;
}

function unlockBody() {
  if (!didLockBody) return;
  document.body.style.overflow = previousOverflow;
  didLockBody = false;
}

function setOpenSideEffects(isOpen) {
  document.removeEventListener("keydown", onKeydown);
  if (isOpen) {
    if (!previousFocusedElement) previousFocusedElement = document.activeElement;
    lockBody();
    document.addEventListener("keydown", onKeydown);
    nextTick(() => {
      focusModal();
    });
  } else {
    unlockBody();
    restorePreviousFocus();
  }
}

onMounted(() => {
  setOpenSideEffects(props.open);
});

onBeforeUnmount(() => {
  unlockBody();
  document.removeEventListener("keydown", onKeydown);
  restorePreviousFocus();
});

watch(() => props.open, (nextOpen) => {
  setOpenSideEffects(nextOpen);
});
</script>

<template>
  <div v-if="open" class="pano-modal-overlay" @click.self="emit('close')">
    <section ref="modalRef" class="pano-modal" role="dialog" aria-modal="true" :aria-label="nodeTitle" tabindex="-1">
      <div class="pano-stage-wrap">
        <canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800" />
        <canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800" />
        <div class="pano-stage-drop-hint" aria-hidden="true">
          <div class="pano-stage-drop-hint-text">Drag and drop image here</div>
        </div>

        <template v-if="!previewMode">
          <PanoToolRail :buttons="shellPreset.toolButtons || []" />
          <PanoPaintDock :paint-swatches="paintSwatches" :panes="shellPreset.paintPanes || []" />
        </template>

        <PanoViewToggle :buttons="shellPreset.viewButtons || []" />

        <PanoFloatingRight :buttons="floatingButtons" />

        <div class="pano-selection-menu" data-selection-menu />
        <button class="pano-btn pano-btn-icon pano-output-preview-toggle" data-action="toggle-output-preview-size" aria-label="Expand Preview" data-tip="Expand preview" style="display:none" v-html="ICON.fullscreen" />
        <div class="pano-tooltip" data-tooltip />
      </div>

      <PanoSidePanel v-if="!hideSidebar" :node-title="nodeTitle" />
    </section>
  </div>
</template>
