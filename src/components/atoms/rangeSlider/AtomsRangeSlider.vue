<script setup lang="ts">
import { ref, onMounted } from 'vue'
const slider = ref()
onMounted(() => {
  console.log(slider._rawValue.clientWidth)
})

const moveHandle = event => {
  const { parentElement: { clientWidth: sliderWidth, offsetLeft: sliderOffsetLeft } } = event.srcElement
  event.srcElement.style.left = `${event.clientX - sliderOffsetLeft - slider._rawValue.clientWidth / 2}px`
  console.log(event.srcElement.offsetLeft - event.srcElement.parentElement.offsetLeft + event.srcElement.offsetWidth /2)
  console.log(event.srcElement.parentElement.offsetLeft, sliderOffsetLeft)
  const { clientX } = event
  const { left, right } = slider._value.getBoundingClientRect()
  const width = right - left
  console.log({ left, right, width })
  const percent = (clientX - left) / width
  // console.log({ percent })
  slider._value.style.setProperty('--percent', percent)
}
</script>

<template>
  <div ref="slider" class="my-8 relative w-full h-4 bg-th-primary rounded-full">
    <div @mousedown="moveHandle" class="absolute -top-1 h-6 w-6 rounded-full left-1/2 -translate-x-1/2 bg-red-500"></div>
  </div>
</template>