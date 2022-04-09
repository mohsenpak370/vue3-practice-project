<script setup lang="ts">
import { computed } from "vue";
interface Props {
  mode?: keyof BtnStyle;
  disabled?: boolean;
  loading?: boolean;
  stop?: boolean;
  prevent?: boolean;
}
const {
  mode = "primary",
  loading = false,
  stop = false,
  prevent = false,
  disabled = false,
} = defineProps<Props>();

const emit = defineEmits(["click"]);

const onClick = (event: Event) => {
  if (prevent) {
    event.preventDefault();
  }
  if (stop) {
    event.stopPropagation();
  }
  if (loading) {
    return;
  }
  emit("click");
};

interface BtnStyle {
  primary: string;
  secondary: string;
  danger: string;
  transparent: string;
}
const btnStyles: BtnStyle = {
  primary: "primary-btn",
  secondary: "secondary-btn",
  danger: "danger-btn",
  transparent: "transparent-btn",
};
const buttonStyle = computed(() => btnStyles[mode]);
</script>

<template>
  <button
    class="btn-basic"
    :class="{
      [buttonStyle]: true,
      'btn-disabled': disabled,
    }"
    :disabled="disabled"
    dir="auto"
    @click="onClick"
  >
    <slot v-if="loading" name="loading">Loading...</slot>
    <slot v-else />
  </button>
</template>

<style src="./AtomsButton.css">
</style>
