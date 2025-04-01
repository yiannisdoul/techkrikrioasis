<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
    class="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between"
  >
    <div class="flex flex-col items-center text-center">
      <lottie-player
        :src="`/assets/lottie/${package.icon}`"
        background="transparent"
        speed="1"
        style="width: 100px; height: 100px"
        loop
        autoplay
      />
      <h3 class="text-xl font-semibold mt-4">{{ package.title }}</h3>
      <p class="text-gray-600 text-sm mt-1 mb-3">Starting from <strong>${{ package.price }}</strong></p>
      <p class="text-sm text-gray-500 mb-4">{{ package.description }}</p>
      <ul class="text-left text-sm space-y-1 text-gray-700">
        <li v-for="(feature, i) in package.features" :key="i">🔹 {{ feature }}</li>
      </ul>
    </div>
    <button
      @click="$emit('select')"
      class="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-all"
    >
      Select This Package
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import '@lottiefiles/lottie-player'

const props = defineProps({
  package: Object
})
</script>

<style scoped>
:deep(lottie-player) {
  pointer-events: none;
}
</style>