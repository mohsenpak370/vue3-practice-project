<script setup lang="ts">
import AtomsDualRange from "./atoms/dualRange/AtomsDualRange.vue";
import { ref } from "vue";

const minValue = ref(13);
const maxValue = ref(78);
</script>

<template>
  <div class="greetings">
    <h3 class="font-bold">
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
    <div class="h-24 flex items-center">
      <AtomsDualRange
        v-model:minValue="minValue"
        v-model:maxValue="maxValue"
      />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
