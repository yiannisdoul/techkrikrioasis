<template>
<nav class="bg-[#FDF8F3] sticky top-0 z-50 py-4 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
    <!-- Logo + Animated Text -->
    <router-link to="/" class="flex items-center space-x-3">
      <img
        src="@/assets/logo.png"
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

    <!-- Desktop menu -->
    <div class="hidden sm:flex items-center space-x-6">
      <ul class="flex space-x-6 font-medium text-[#1A1A1A] text-sm md:text-base">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <!-- Partner Program nav item (different style) -->
        <li>
          <router-link 
            to="/partner-program" 
            class="text-[#D0008E] font-semibold hover:underline"
          >
            Partner Program
          </router-link>
        </li>
      </ul>

      <!-- Phone Number (clickable tel link) -->
      <a 
        href="tel:1300421078" 
        class="text-[#1A1A1A] font-semibold text-sm md:text-base mr-4 hover:text-[#D0008E] transition"
        aria-label="Call 1300 421 078"
      >
        1300 421 078
      </a>

      <!-- 📞 Book a Call Button (Desktop) -->
      <router-link
        to="/contact"
        class="inline-block bg-[#E85D04] text-white font-bold px-5 py-2 rounded-md hover:bg-[#d94c00] transition text-sm shadow-sm"
      >
        Free Strategic Plan
      </router-link>
    </div>

    <!-- Burger button -->
    <button @click="toggleMenu" class="sm:hidden focus:outline-none">
      <svg
        class="w-6 h-6 text-[#1A1A1A]"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <!-- Mobile dropdown menu -->
  <transition name="fade">
    <div v-if="isOpen" class="sm:hidden px-4 pt-2 pb-4 bg-[#FDF8F3]">
      <ul class="flex flex-col items-center space-y-3 font-medium text-[#1A1A1A] text-base">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
        <li><router-link to="/portfolio" @click="closeMenu">Portfolio</router-link></li>
        <li><router-link to="/blog" @click="closeMenu">Blog</router-link></li>
        <!-- Partner Program nav item -->
        <li>
          <router-link 
            to="/partner-program" 
            class="text-[#D0008E] font-semibold hover:underline"
            @click="closeMenu"
          >
            Partner Program
          </router-link>
        </li>
      </ul>

      <!-- Phone number displayed as block text on mobile -->
      <a 
        href="tel:1300421078" 
        class="block mt-4 text-center text-[#1A1A1A] font-semibold text-base hover:text-[#D0008E] transition"
        @click="closeMenu"
        aria-label="Call 1300 421 078"
      >
        1300 421 078
      </a>

      <!-- 📞 Book a Call Button (Mobile Dropdown) -->
      <router-link
        to="/contact"
        class="block mt-2 text-center bg-[#E85D04] text-white font-bold px-5 py-2 rounded-md hover:bg-[#d94c00] transition text-base shadow-sm"
        @click="closeMenu"
      >
        Free Strategic Plan
      </router-link>
    </div>
  </transition>
</nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);

// Typewriter animation
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

  // Reset on scroll to top
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
