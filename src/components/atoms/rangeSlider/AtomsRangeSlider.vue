<script setup lang="ts">
import { ref, computed } from "vue";

const minValue = ref(10);
const maxValue = ref(30);

const sliderBackground = computed(() => {
  return `to right,
    transparent ${minValue.value}%,
    currentColor ${minValue.value}% ${maxValue.value}%,
    transparent ${maxValue.value}%`;
});
const sliderMin = computed({
  get() {
    return Number(minValue.value);
  },
  set(value: number | string) {
    value = Number(value);
    if (value > maxValue.value) {
      maxValue.value = value;
    }
    minValue.value = value;
  },
});
const sliderMax = computed({
  get() {
    return maxValue.value;
  },
  set(value: number | string) {
    value = Number(value);
    if (value < minValue.value) {
      minValue.value = value;
    }
    maxValue.value = value;
  },
});
</script>

<template>
  <div class="range-slider text-th-primary">
    <input v-model="sliderMin" type="range" min="0" max="100" step="1" />
    <input v-model="sliderMax" type="range" min="0" max="100" step="1" />
  </div>
</template>

<style src="./AtomsRangeSlider.css">
.range-slider input[type="range"] {
  background-image: linear-gradient(v-bind(sliderBackground));
}
</style>
