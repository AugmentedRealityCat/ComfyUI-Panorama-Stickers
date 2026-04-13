<script setup>
defineProps({
  panels: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <aside class="pano-side">
    <div class="pano-side-head">
      <div class="pano-side-title">
        <span class="pano-side-title-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
        Vue Modal Base
      </div>
    </div>
    <span class="pano-divider" />
    <div class="pano-inspector">
      <section
        v-for="panel in panels"
        :key="panel.id || panel.title"
        class="pano-params"
      >
        <div class="pano-section-title">
          <span>{{ panel.title }}</span>
          <span v-if="panel.meta" class="meta">{{ panel.meta }}</span>
        </div>
        <div
          v-for="field in panel.fields || []"
          :key="field.id || field.label"
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
              disabled
            >
            <input type="number" :value="field.value ?? 0" disabled>
          </template>
          <template v-else-if="field.kind === 'textarea'">
            <div class="pano-vue-wide-card pano-vue-wide-card-text">{{ field.value }}</div>
          </template>
          <template v-else>
            <div class="pano-vue-field-value">{{ field.value }}</div>
          </template>
        </div>
        <p v-if="panel.note" class="pano-param-note">{{ panel.note }}</p>
      </section>
    </div>
  </aside>
</template>
