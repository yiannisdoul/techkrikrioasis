<!-- <template>
  <div class="pt-24 px-6 md:px-12 lg:px-20">
    <h1 class="text-4xl font-bold text-[var(--primary-color)] mb-6">Contact Us</h1>
    <p class="text-gray-700 max-w-3xl mb-10">
      We'd love to learn more about your project and how we can support your growth. Fill out the form or email us directly.
    </p>

    <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input type="text" placeholder="Full Name" class="p-4 border rounded-xl" />
      <input type="email" placeholder="Email Address" class="p-4 border rounded-xl" />
      <input type="text" placeholder="Company (Optional)" class="p-4 border rounded-xl md:col-span-2" />
      <textarea placeholder="Your Message" class="p-4 border rounded-xl md:col-span-2" rows="5"></textarea>
      <button type="submit" class="bg-[var(--accent-color)] text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition md:col-span-2">
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
// Future: add form validation and backend integration
</script>

<style scoped></style> -->

<template>
  <div 
    class="pt-24 px-6 md:px-12 lg:px-20 min-h-screen"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : '#fff8f1'
    }"
  >
    <h1 
      class="text-4xl font-bold mb-6 text-center"
      :style="{
        color: themeStore.isDarkMode ? '#FF4DC1' : '#D0008E'
      }"
    >
      Book a Free Discovery Call
    </h1>

    <p 
      class="max-w-3xl mx-auto text-center mb-10 text-base sm:text-lg"
      :style="{
        color: themeStore.isDarkMode ? '#D1D5DB' : '#4B5563'
      }"
    >
      Let's explore your business goals and how Tech Kri-Kri Oasis can help you grow.
      Choose a time that suits you below — no strings attached.
    </p>

    <!-- Updated Responsive Calendly Embed -->
    <div class="w-full flex justify-center">
      <iframe
        src="https://calendly.com/yiannis-techkrikrioasis/free-discovery-call"
        class="w-full max-w-3xl h-[750px] sm:h-[700px] md:h-[650px] lg:h-[600px] rounded-xl shadow-xl"
        :style="{
          border: themeStore.isDarkMode ? '1px solid #2D3748' : 'none'
        }"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/ThemeStore';

const themeStore = useThemeStore();
</script>

<style scoped></style>
