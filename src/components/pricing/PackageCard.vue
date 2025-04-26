<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
    class="rounded-2xl shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white'
    }"
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
      <h3 
        class="text-xl font-semibold mt-4"
        :style="{
          color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
        }"
      >{{ package.title }}</h3>
      <p 
        class="text-sm mt-1 mb-3"
        :style="{
          color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
        }"
      >Starting from <strong>${{ package.price }}</strong></p>
      <p 
        class="text-sm mb-4"
        :style="{
          color: themeStore.isDarkMode ? '#6B7280' : '#6B7280'
        }"
      >{{ package.description }}</p>
      <ul class="text-left text-sm space-y-1">
        <li 
          v-for="(feature, i) in package.features" 
          :key="i"
          :style="{
            color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
          }"
        >🔹 {{ feature }}</li>
      </ul>
    </div>
    <button
      @click="$emit('select')"
      class="mt-6 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-all"
      :style="{
        background: themeStore.isDarkMode 
          ? 'linear-gradient(to right, #FBBF24, #FF7E33)' 
          : 'linear-gradient(to right, #FBBF24, #EA580C)'
      }"
    >
      Select This Package
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useThemeStore } from '../../stores/ThemeStore'
import '@lottiefiles/lottie-player'

const themeStore = useThemeStore()

const props = defineProps({
  package: Object
})
</script>

<style scoped>
:deep(lottie-player) {
  pointer-events: none;
}
</style>