<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" @click.self="closeModal">
        <transition name="scale">
          <div
            class="max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6 relative"
            :style="{
              backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white',
              color: themeStore.isDarkMode ? '#E2E8F0' : 'inherit'
            }"
            @keydown.esc="closeModal"
          >
            <button
              class="absolute top-4 right-4 text-xl font-bold"
              :style="{
                color: themeStore.isDarkMode ? '#9CA3AF' : '#6B7280',
                '--hover-color': themeStore.isDarkMode ? '#F87171' : '#EF4444'
              }"
              @mouseenter="updateCloseButtonColor"
              @mouseleave="resetCloseButtonColor"
              ref="closeButtonElement"
              @click="closeModal"
            >
              &times;
            </button>
            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '../../stores/ThemeStore';

const themeStore = useThemeStore();
const closeButtonElement = ref<HTMLElement | null>(null);

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);

const closeModal = () => emit("close");

// Handle hover effect for close button
const updateCloseButtonColor = () => {
  if (closeButtonElement.value) {
    closeButtonElement.value.style.color = getComputedStyle(closeButtonElement.value).getPropertyValue('--hover-color');
  }
}

const resetCloseButtonColor = () => {
  if (closeButtonElement.value) {
    closeButtonElement.value.style.color = themeStore.isDarkMode ? '#9CA3AF' : '#6B7280';
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.scale-enter-active, .scale-leave-active {
  transition: transform 0.25s ease;
}
.scale-enter-from {
  transform: scale(0.95);
}
.scale-leave-to {
  transform: scale(0.95);
}
</style>