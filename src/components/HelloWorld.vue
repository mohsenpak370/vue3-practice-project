<script setup lang="ts">
import AtomsCheckbox from "./atoms/checkbox/AtomsCheckbox.vue";
import { ref } from "vue"

const check = ref(false);
let checkboxes = ref(['test3'])
</script>

<template>
  <div class="greetings">
    <h3 class="font-bold">
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
    <AtomsCheckbox v-model="checkboxes" class="mt-4 mx-4" label="test1" value="test" size="sm" />
    <AtomsCheckbox v-model="check" class="mt-4 mx-4" label="test" />
    <AtomsCheckbox v-model="checkboxes" class="mt-4 mx-4" label="test3" value="test3" size="lg" />
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
