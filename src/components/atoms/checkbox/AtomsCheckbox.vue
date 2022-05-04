<script setup lang="ts">
export interface CheckboxSize {
  sm: string;
  normal: string;
  lg: string;
}
export interface CheckboxProps {
  modelValue: boolean | string[];
  size?: keyof CheckboxSize;
  disabled?: boolean;
  value?: string;
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
} = defineProps<CheckboxProps>();

const emit = defineEmits(["update:modelValue"]);

const vModelValue = computed<boolean | string[]>({
  get() {
    return modelValue;
  },
  set(value: boolean | string[]) {
    emit("update:modelValue", value);
  },
});

const checkboxSize: CheckboxSize = {
  sm: "small-checkbox",
  normal: "normal-checkbox",
  lg: "large-checkbox",
};
const boxSize = computed(() => checkboxSize[size]);
</script>

<template>
  <label
    class="inline-flex items-center gap-2"
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
  >
    <input
      v-model="vModelValue"
      type="checkbox"
      :value="value"
      class="accent-th-primary"
      :class="{
        [boxSize]: true,
        'cursor-not-allowed': disabled,
        'cursor-pointer': !disabled,
      }"
      :disabled="disabled"
    />
    <span :class="`font-${fontWeight}`">{{ label }}</span>
  </label>
</template>

<style src="./AtomsCheckbox.css"></style>
