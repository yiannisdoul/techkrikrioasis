<template>
  <div
    @click="$emit('open')"
    class="cursor-pointer rounded-xl p-6 text-center shadow transition-all border hover:shadow-lg hover:-translate-y-1 flex flex-col items-center justify-between"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white',
      borderColor: themeStore.isDarkMode ? '#2D3748' : 'transparent',
      borderWidth: '1px',
      '--hover-border-color': themeStore.isDarkMode ? '#FF7E33' : '#E85D04'
    }"
    @mouseenter="updateBorderColor"
    @mouseleave="resetBorderColor"
    ref="cardElement"
  >
    <img 
      :src="icon" 
      class="h-12 w-12 mb-4" 
      alt="service icon" 
      :style="{
        filter: themeStore.isDarkMode ? 'brightness(1.1)' : 'none'
      }"
    />
    <h3 
      class="font-semibold text-base sm:text-lg mb-2"
      :style="{
        color: themeStore.isDarkMode ? '#FF4DC1' : '#D0008E'
      }"
    >{{ title }}</h3>
    <p 
      class="text-sm mb-4"
      :style="{
        color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
      }"
    >{{ description }}</p>
    <button 
      class="text-sm text-white px-4 py-2 rounded-full transition"
      :style="{
        backgroundColor: themeStore.isDarkMode ? '#FF4DC1' : '#D0008E',
        '--hover-bg-color': themeStore.isDarkMode ? '#FF7E33' : '#e85d04'
      }"
      @mouseenter="updateButtonBg"
      @mouseleave="resetButtonBg"
      ref="buttonElement"
    >
      Learn More
    </button>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '../../stores/ThemeStore';

const themeStore = useThemeStore();
const cardElement = ref<HTMLElement | null>(null);
const buttonElement = ref<HTMLElement | null>(null);

defineProps<{
  title: string
  icon: string
  description: string
}>()

defineEmits(['open'])

// Handle hover effects programmatically for dynamic color changes
const updateBorderColor = () => {
  if (cardElement.value) {
    cardElement.value.style.borderColor = getComputedStyle(cardElement.value).getPropertyValue('--hover-border-color');
  }
}

const resetBorderColor = () => {
  if (cardElement.value) {
    cardElement.value.style.borderColor = themeStore.isDarkMode ? '#2D3748' : 'transparent';
  }
}

const updateButtonBg = () => {
  if (buttonElement.value) {
    buttonElement.value.style.backgroundColor = getComputedStyle(buttonElement.value).getPropertyValue('--hover-bg-color');
  }
}

const resetButtonBg = () => {
  if (buttonElement.value) {
    buttonElement.value.style.backgroundColor = themeStore.isDarkMode ? '#FF4DC1' : '#D0008E';
  }
}
</script>