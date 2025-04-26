<template>
  <section
    class="pt-16 sm:pt-20 pb-12 px-4 sm:px-6 md:px-10 text-center text-white"
    data-aos="fade-up"
    data-aos-duration="800"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#FF7E33' : '#E85D04'
    }"
  >
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
        Ready to Launch Your Digital Project?
      </h2>
      <p class="mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
        Book a free discovery call with our team and take the first step toward success.
      </p>

      <router-link
        to="/contact"
        class="inline-block font-semibold px-6 py-3 rounded-md transition text-sm sm:text-base animate-pulse"
        :style="{
          backgroundColor: 'white',
          color: themeStore.isDarkMode ? '#FF7E33' : '#E85D04'
        }"
      >
        Book a Free Call
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '../../stores/ThemeStore';

const themeStore = useThemeStore();
</script>