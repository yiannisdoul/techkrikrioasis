<template>
  <nav 
    class="dark-navbar light-navbar sticky top-0 z-50 py-4 shadow-sm transition-colors duration-300"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#1A1A1A' : '#FDF8F3'
    }"
  >
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
            class="text-base sm:text-xl md:text-2xl font-bold tracking-wide transition"
            :style="{
              color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
            }"
          >
            TK<sup>2</sup>O
          </span>
          <div 
            class="text-xs sm:text-sm md:text-base font-medium typing-cursor"
            :style="{
              color: themeStore.isDarkMode ? '#FF7E33' : '#E85D04'
            }"
          >
            {{ typedText }}
          </div>
        </div>
      </router-link>

      <!-- Desktop menu -->
      <div class="hidden sm:flex items-center space-x-6">
        <ul class="flex space-x-6 font-medium text-sm md:text-base">
          <li>
            <router-link 
              to="/" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >Home</router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >About</router-link>
          </li>
          <li>
            <router-link 
              to="/services" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >Services</router-link>
          </li>
          <li>
            <router-link 
              to="/portfolio" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >Portfolio</router-link>
          </li>
          <li>
            <router-link 
              to="/blog" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >Blog</router-link>
          </li>
        </ul>

        <!-- Theme toggle button -->
        <ThemeToggle />

        <!-- 📞 Book a Call Button (Desktop) -->
        <router-link
          to="/contact"
          class="inline-block text-white font-bold px-5 py-2 rounded-md transition text-sm shadow-sm"
          :style="{
            backgroundColor: themeStore.isDarkMode ? '#FF7E33' : '#E85D04',
          }"
        >
          Book a Free Call
        </router-link>
      </div>

      <!-- Mobile buttons (hamburger + theme toggle) -->
      <div class="sm:hidden flex items-center space-x-2">
        <!-- Theme toggle button (mobile) -->
        <ThemeToggle />
        
        <!-- Burger button -->
        <button 
          @click="toggleMenu" 
          class="focus:outline-none"
          :style="{
            color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
          }"
        >
          <svg
            class="w-6 h-6"
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
    </div>

    <!-- Mobile dropdown menu -->
    <transition name="fade">
      <div 
        v-if="isOpen" 
        class="sm:hidden px-4 pt-2 pb-4 transition-colors duration-300"
        :style="{
          backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : '#FDF8F3'
        }"
      >
        <ul class="flex flex-col items-center space-y-3 font-medium text-base">
          <li>
            <router-link 
              to="/" 
              @click="closeMenu" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >Home</router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              @click="closeMenu" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >About</router-link>
          </li>
          <li>
            <router-link 
              to="/services" 
              @click="closeMenu" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >Services</router-link>
          </li>
          <li>
            <router-link 
              to="/portfolio" 
              @click="closeMenu" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >Portfolio</router-link>
          </li>
          <li>
            <router-link 
              to="/blog" 
              @click="closeMenu" 
              class="transition-colors"
              :style="{
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
            >Blog</router-link>
          </li>
        </ul>

        <!-- 📞 Book a Call Button (Mobile Dropdown) -->
        <router-link
          to="/contact"
          class="block mt-4 text-center text-white font-bold px-5 py-2 rounded-md transition text-base shadow-sm"
          :style="{
            backgroundColor: themeStore.isDarkMode ? '#FF7E33' : '#E85D04',
          }"
          @click="closeMenu"
        >
          Book a Free Call
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import ThemeToggle from '../common/ThemeToggle.vue';
  import { useThemeStore } from '../../stores/ThemeStore';

  const themeStore = useThemeStore();
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