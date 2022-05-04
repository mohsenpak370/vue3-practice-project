<script setup lang="ts">
export interface RangeSliderProps {
  minValue: number;
  maxValue: number;
  min?: string;
  max?: string;
  step?: string;
  disabled?: boolean;
}

import { computed } from "vue";

const {
  minValue,
  maxValue,
  min = "0",
  max = "100",
  step = "1",
  disabled = false,
} = defineProps<RangeSliderProps>();

const emit = defineEmits(["update:minValue", "update:maxValue"]);

const sliderMin = computed({
  get() {
    return Number(minValue);
  },
  set(value: number | string) {
    value = Number(value);
    if (value > maxValue) {
      emit("update:maxValue", value);
    }
    emit("update:minValue", value);
  },
});
const sliderMax = computed({
  get() {
    return maxValue;
  },
  set(value: number | string) {
    value = Number(value);
    if (value < minValue) {
      emit("update:minValue", value);
    }
    emit("update:maxValue", value);
  },
});

const sliderBackground = computed(() => {
  const minValuePercent = Math.ceil(
    ((minValue - Number(min)) / (Number(max) - Number(min))) * 100
  );
  const maxValuePercent = Math.floor(
    ((maxValue - Number(min)) / (Number(max) - Number(min))) * 100
  );
  return `to right,
    transparent ${minValuePercent}%,
    currentColor ${minValuePercent}% ${maxValuePercent}%,
    transparent ${maxValuePercent}%`;
});
</script>

<template>
  <div class="dual-range-slider text-th-primary">
    <input
      v-model="sliderMin"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
    />
    <input
      v-model="sliderMax"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
    />
  </div>
</template>

<style src="./AtomsDualRange.css">
.dual-range-slider input[type="range"] {
  /* to make this rule work, it should be both in the sfc style tag and in css file */
  background-image: linear-gradient(v-bind(sliderBackground));
}
</style>
