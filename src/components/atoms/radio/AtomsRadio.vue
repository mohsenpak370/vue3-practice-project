<script setup lang="ts">
export interface RadioSize {
  sm: string;
  normal: string;
  lg: string;
}
export interface RadioProps {
  modelValue: string;
  size?: keyof RadioSize;
  disabled?: boolean;
  value: string;
  label?: string;
  fontWeight?: string;
}

import { computed } from "vue";

const {
  modelValue,
  size = "normal",
  disabled = false,
  value,
  label,
  fontWeight = "normal",
} = defineProps<RadioProps>();

const vModelValue = computed<string>({
  get() {
    return modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});

const radioSize: RadioSize = {
  sm: "small-checkbox",
  normal: "normal-checkbox",
  lg: "large-checkbox",
};
const buttonSize = computed(() => radioSize[size]);

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label
    class="inline-flex items-center gap-2"
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
  >
    <input
      v-model="vModelValue"
      type="radio"
      :value="value"
      class="accent-th-primary"
      :class="{
        [buttonSize]: true,
        'cursor-not-allowed': disabled,
        'cursor-pointer': !disabled,
      }"
      :disabled="disabled"
    />
    <span :class="`font-${fontWeight}`">{{ label }}</span>
  </label>
</template>

<style src="./AtomsRadio.css"></style>
