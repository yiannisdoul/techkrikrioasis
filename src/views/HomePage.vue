<template>
  <div 
    class="min-h-screen pt-8 px-4 sm:px-6 md:px-10 transition-colors duration-300"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : '#fff8f1',
      color: themeStore.isDarkMode ? '#F5F5F5' : '#1A1A1A'
    }"
  >
    <div class="max-w-7xl mx-auto w-full">
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/ThemeStore';
import HeroSection from '../components/sections/HeroSection.vue';
import ServicesSection from '../components/services/ServicesSection.vue';
import WhyUsSection from '../components/sections/WhyUsSection.vue';
import TestimonialsSection from '../components/sections/TestimonialsSection.vue';

const themeStore = useThemeStore();
</script>

<style scoped>
[data-aos] {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-aos].aos-animate {
  opacity: 1;
  transform: none;
}
.card-hover:hover {
  animation: vibrate 0.3s linear;
}
@keyframes vibrate {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
</style>