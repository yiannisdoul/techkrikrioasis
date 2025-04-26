<template>
  <div class="transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
    <!-- Sticky NavBar -->
    <NavBar />

    <!-- Main Page Content -->
    <router-view />

    <!-- CTA Section shown on all pages except certain routes -->
    <CTASection v-if="showCTA" />

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 left-6 bg-[#E85D04] hover:bg-[#D0008E] dark:bg-[#FF7E33] dark:hover:bg-[#FF4DC1] text-white p-3 rounded-full shadow-lg transition z-50 text-xl font-bold"
    >
      ↑
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/layout/NavBar.vue';
import Footer from './components/layout/Footer.vue';
import CTASection from './components/sections/CTASection.vue';
import { useThemeStore } from './stores/ThemeStore';

const isDevelopment = process.env.NODE_ENV === 'development';

const route = useRoute();
const themeStore = useThemeStore();

const showScrollTop = ref(false);
const showCTA = ref(true);

// Optional: Exclude CTA on specific routes
const excludedPaths = ['/contact'];

// Handle scroll-to-top visibility + typewriter reset
onMounted(() => {
  // Initialize theme
  themeStore.initTheme();
  console.log('Theme initialized in App.vue');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    showScrollTop.value = scrollTop > 100;

    // Reset the typewriter when user scrolls to top
    if (scrollTop === 0 && window.__resetTypewriter__) {
      window.__resetTypewriter__();
    }
  });
});

// Watch for route change to update CTA visibility
watch(
  () => route.path,
  (newPath) => {
    showCTA.value = !excludedPaths.includes(newPath);
  },
  { immediate: true }
);

// Scroll to top action
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style>
/* Optional: smoother appearance */
button[v-cloak] {
  display: none;
}

/* Force Tailwind dark mode to work by adding !important */
html.dark {
  color-scheme: dark;
}

html.dark body {
  background-color: var(--background-color) !important;
  color: white !important;
}

/* Transition for all elements */
* {
  transition-property: color, background-color, border-color;
  transition-duration: 300ms;
}
</style>