<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from "vue";

const props = defineProps({
  model: { type: Object, default: () => ({}) },
});

const overlayRef = ref(null);
const cardRef = ref(null);
let previousFocusedElement = null;

function getFocusableElements() {
  const card = cardRef.value;
  if (!card) return [];
  return Array.from(card.querySelectorAll(
    "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])",
  )).filter((el) => {
    if (!(el instanceof HTMLElement)) return false;
    return !el.hidden && el.tabIndex >= 0 && el.offsetParent !== null;
  });
}

function triggerAction(action) {
  const card = cardRef.value;
  if (!card) return;
  const button = card.querySelector(`[data-action='${action}']`);
  if (button instanceof HTMLButtonElement) button.click();
}

function focusDialog() {
  const card = cardRef.value;
  if (!card) return;
  const acceptButton = card.querySelector("[data-action='confirm-accept']");
  if (acceptButton instanceof HTMLElement) {
    acceptButton.focus();
    return;
  }
  const focusables = getFocusableElements();
  const target = focusables[0] || card;
  target?.focus?.();
}

function restoreFocus() {
  if (previousFocusedElement instanceof HTMLElement && previousFocusedElement.isConnected) {
    previousFocusedElement.focus();
  }
  previousFocusedElement = null;
}

function onCardKeydown(event) {
  if (event.defaultPrevented) return;
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    triggerAction("confirm-cancel");
    return;
  }
  if (event.key !== "Tab") return;
  const focusables = getFocusableElements();
  const card = cardRef.value;
  if (!focusables.length) {
    event.preventDefault();
    card?.focus?.();
    return;
  }
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;
  if (event.shiftKey) {
    if (active === first || active === card || !card?.contains(active)) {
      event.preventDefault();
      last.focus();
    }
    return;
  }
  if (active === last || !card?.contains(active)) {
    event.preventDefault();
    first.focus();
  }
}

function onOverlayClick(event) {
  if (event.target !== overlayRef.value) return;
  triggerAction("confirm-cancel");
}

watch(() => props.model.visible, (visible, wasVisible) => {
  if (visible) {
    previousFocusedElement = document.activeElement;
    nextTick(() => {
      focusDialog();
    });
    return;
  }
  if (wasVisible) restoreFocus();
});

onBeforeUnmount(() => {
  restoreFocus();
});
</script>

<template>
  <div
    v-if="model.visible === true"
    ref="overlayRef"
    class="pano-canvas-confirm"
    data-confirm-overlay
    role="presentation"
    @click.self="onOverlayClick"
  >
    <div
      ref="cardRef"
      class="pano-canvas-confirm-card"
      role="dialog"
      aria-modal="true"
      :aria-label="model.title || 'Confirm'"
      tabindex="-1"
      @keydown="onCardKeydown"
    >
      <div class="pano-canvas-confirm-title">{{ model.title }}</div>
      <div class="pano-canvas-confirm-text">{{ model.text }}</div>
      <div class="pano-canvas-confirm-actions">
        <button class="pano-btn" type="button" data-action="confirm-cancel">Cancel</button>
        <button class="pano-btn pano-btn-primary" type="button" data-action="confirm-accept">{{ model.confirmLabel || "Confirm" }}</button>
      </div>
    </div>
  </div>
</template>
