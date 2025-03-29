<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />

    <!-- Scroll to Top Arrow -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-[#E85D04] hover:bg-[#D0008E] text-white p-3 rounded-full shadow-lg transition z-50"
    >
      ↑
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const showScrollTop = ref(false);

// Scroll to top button action
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll listener: reset typedText + toggle arrow
onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    showScrollTop.value = scrollTop > 100;

    // Restart typewriter if scrolled to top
    if (scrollTop === 0 && window.__resetTypewriter__) {
      window.__resetTypewriter__(); // Call from Navbar.vue
    }
  });
});
</script>
