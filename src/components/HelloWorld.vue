<script setup lang="ts">
import AtomsRadio from "./atoms/radio/AtomsRadio.vue";
import { ref } from "vue"

let radio = ref('test2');
</script>

<template>
  <div class="greetings">
    <h3 class="font-bold">
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
    <AtomsRadio v-model="radio" class="mt-4 mx-4" label="test1" value="test1" size="sm" />
    <AtomsRadio v-model="radio" class="mt-4 mx-4" value="test2" label="test2" disabled />
    <AtomsRadio v-model="radio" class="mt-4 mx-4" label="test3" value="test3" size="lg" />
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
