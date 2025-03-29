<template>
  <nav class="bg-[#FDF8F3] sticky top-0 z-50 py-4 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <!-- Logo + Animated Text -->
      <router-link to="/" class="flex items-center space-x-3">
        <img
          src="../assets/logo.png"
          alt="Logo"
          class="h-14 w-14 md:h-20 md:w-20 object-contain transition-transform hover:rotate-6 hover:scale-105"
        />
        <div class="leading-tight block text-center sm:text-left">
          <span
            class="text-base sm:text-xl md:text-2xl font-bold tracking-wide text-[#1A1A1A] hover:text-[#D0008E] transition"
          >
            TK<sup>2</sup>O
          </span>
          
          <div class="text-xs sm:text-sm md:text-base text-[#E85D04] font-medium typing-cursor">
            {{ typedText }}
          </div>
        </div>
      </router-link>

      <!-- Burger button -->
      <button @click="toggleMenu" class="sm:hidden focus:outline-none">
        <svg class="w-6 h-6 text-[#1A1A1A]" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Desktop menu -->
      <ul class="hidden sm:flex space-x-6 font-medium text-[#1A1A1A] text-sm md:text-base">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/pricing">Pricing</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>

    <!-- Mobile dropdown menu -->
    <transition name="fade">
      <div v-if="isOpen" class="sm:hidden px-4 pt-2 pb-4 bg-[#FDF8F3]">
        <ul class="flex flex-col space-y-3 font-medium text-[#1A1A1A] text-base">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About</router-link></li>
          <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
          <li><router-link to="/pricing" @click="closeMenu">Pricing</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);

// Typewriter
const fullText = 'TK²O your limits. Outthink. Outbuild. Outperform.';
const typedText = ref('');
let index = 0;
const keystroke = new Audio('/sounds/keystroke.mp3');

function typeWriter() {
  if (index < fullText.length) {
    typedText.value += fullText.charAt(index);
    keystroke.currentTime = 0;
    keystroke.play();
    index++;
    setTimeout(typeWriter, 45);
  }
}

onMounted(() => {
  typedText.value = '';
  index = 0;
  typeWriter();
  window.__resetTypewriter__ = () => {
    typedText.value = '';
    index = 0;
    typeWriter();
  };
});
</script>

<style scoped>
.typing-cursor::after {
  content: '|';
  animation: blink 1s step-end infinite;
  margin-left: 4px;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
