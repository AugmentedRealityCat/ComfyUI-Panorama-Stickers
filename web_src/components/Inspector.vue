<script setup>
defineProps({
  panels: { type: Array, default: () => [] },
});

defineEmits(["close"]);
</script>

<template>
  <aside class="pano-side">

    <div class="pano-side-head">
      <div class="pano-side-title">
        <slot name="title">Inspector</slot>
      </div>
      <div class="pano-side-actions">
        <slot name="head-actions" />
      </div>
    </div>

    <span class="pano-divider" />

    <div class="pano-inspector">
      <section
        v-for="panel in panels"
        :key="panel.id ?? panel.title"
        class="pano-params"
      >
        <div class="pano-section-title">
          <span>{{ panel.title }}</span>
          <span v-if="panel.meta" class="meta">{{ panel.meta }}</span>
        </div>

        <div
          v-for="field in panel.fields ?? []"
          :key="field.id ?? field.label"
          :class="field.wide ? 'pano-field-wide' : 'pano-field'"
        >
          <label>{{ field.label }}</label>
          <template v-if="field.kind === 'range'">
            <input
              type="range"
              :min="field.min ?? 0"
              :max="field.max ?? 100"
              :step="field.step ?? 1"
              :value="field.value ?? 0"
            />
            <input type="number" :value="field.value ?? 0" />
          </template>
          <template v-else-if="field.kind === 'picker'">
            <div class="pano-picker">
              <button type="button" class="pano-picker-trigger">
                <span class="pano-picker-label">{{ field.value }}</span>
                <span class="pano-picker-caret">▾</span>
              </button>
            </div>
          </template>
          <template v-else>
            <div class="pano-picker-trigger" style="pointer-events:none">
              <span class="pano-picker-label">{{ field.value }}</span>
            </div>
          </template>
        </div>

        <p v-if="panel.note" class="pano-param-note">{{ panel.note }}</p>
      </section>
    </div>

    <div class="pano-side-footer">
      <slot name="footer">
        <button type="button" class="pano-btn" @click="$emit('close')">Cancel</button>
        <button type="button" class="pano-btn pano-btn-primary">Save</button>
      </slot>
    </div>

  </aside>
</template>
