<template>
    <lottie-player
      :src="`/assets/lottie/${name}.json`"
      background="transparent"
      speed="1"
      loop
      autoplay
      style="width: 100%; height: 100%"
    />
  </template>
  
  <script setup lang="ts">
  defineProps<{ name: string }>()
  import '@lottiefiles/lottie-player'
  </script>
  