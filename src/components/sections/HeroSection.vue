<template>
  <section
    class="w-full px-4 sm:px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left"
    data-aos="fade-right"
  >
    <div data-aos="fade-right" data-aos-duration="800">
      <h1 
        class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight break-words"
        :style="{
          color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
        }"
      >
        Empowering Your<br />
        Digital Transformation
      </h1>
      <p 
        class="text-base sm:text-lg mb-6"
        :style="{
          color: themeStore.isDarkMode ? '#D1D5DB' : '#4B5563'
        }"
      >
        Backed by 10 years of combined sales and full-stack development experience, 
        we create cutting-edge websites, e-commerce platforms, and mobile apps that don't 
        just look great—they drive results and align perfectly with your business strategy.
      </p>
      <router-link
        to="/services"
        class="inline-block text-white px-6 py-3 rounded-md transition text-sm sm:text-base"
        :style="{
          backgroundColor: themeStore.isDarkMode ? '#FF7E33' : '#E85D04',
          hover: themeStore.isDarkMode ? '#FF4DC1' : '#D0008E'
        }"
      >
        Get Started
      </router-link>
    </div>

    <div class="flex justify-center md:justify-end" data-aos="zoom-in" data-aos-duration="800">
      <img
        src="https://assets.techkrikrioasis.com.au/hero-illustration.png"
        alt="Hero illustration"
        class="w-56 sm:w-64 md:w-72 max-w-full h-auto"
        :style="{
          filter: themeStore.isDarkMode ? 'brightness(1.1)' : 'none'
        }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '../../stores/ThemeStore';

const themeStore = useThemeStore();
</script>