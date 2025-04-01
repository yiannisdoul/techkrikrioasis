<template>
    <teleport to="body">
      <transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" @click.self="closeModal">
          <transition name="scale">
            <div
              class="bg-white max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6 relative"
              @keydown.esc="closeModal"
            >
              <button
                class="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
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
  defineProps<{ isOpen: boolean }>();
  const emit = defineEmits(["close"]);
  
  const closeModal = () => emit("close");
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
  