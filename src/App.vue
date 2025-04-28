<template>
  <div>
    <!-- Sticky NavBar -->
    <NavBar />

    <!-- Main Page Content -->
    <router-view />
    <ToastContainer/>
    <!-- CTA Section shown on all pages except certain routes -->
    <CTASection v-if="showCTA" />

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 left-6 bg-[#E85D04] hover:bg-[#D0008E] text-white p-3 rounded-full shadow-lg transition z-50 text-xl font-bold"
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
import ToastContainer from './components/ui/toast/ToastContainer.vue'

const route = useRoute();

const showScrollTop = ref(false);
const showCTA = ref(true);

// Optional: Exclude CTA on specific routes
const excludedPaths = ['/contact'];

// Handle scroll-to-top visibility + typewriter reset
onMounted(() => {
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
button[ v-cloak ] {
  display: none;
}
</style>
