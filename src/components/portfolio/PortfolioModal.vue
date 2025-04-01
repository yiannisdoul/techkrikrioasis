<template>
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          @click.self="closeModal"
        >
          <transition name="scale">
            <div
              class="bg-white w-full max-w-5xl max-h-[80vh] overflow-hidden rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 relative"
              @keydown.esc="closeModal"
            >
              <!-- ❌ Close -->
              <button
                class="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
                @click="closeModal"
              >
                &times;
              </button>
  
              <!-- 🖼 Left: Carousel -->
              <div class="w-full md:w-1/2 flex flex-col items-center justify-center">
                <div
                  id="carousel-container"
                  class="relative h-64 w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center"
                >
                  <img
                    :src="images[currentIndex]"
                    :alt="`Project image ${currentIndex + 1}`"
                    class="h-full w-auto object-contain"
                  />
  
                  <!-- ◀ Left -->
                  <button
                    @click="prevSlide"
                    class="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 animate-arrow"
                  >
                    ◀
                  </button>
  
                  <!-- ▶ Right -->
                  <button
                    @click="nextSlide"
                    class="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 animate-arrow"
                  >
                    ▶
                  </button>
                </div>
  
                <!-- ⬤ Dots -->
                <div class="flex justify-center mt-3">
                  <span
                    v-for="(img, idx) in images"
                    :key="idx"
                    class="w-2 h-2 mx-1 rounded-full transition-all duration-200"
                    :class="idx === currentIndex ? 'bg-[#E85D04]' : 'bg-gray-300'"
                  ></span>
                </div>
              </div>
  
              <!-- 📝 Right: Info -->
              <div class="w-full md:w-1/2 overflow-y-auto text-left">
                <h3 class="text-2xl font-bold text-[#D0008E] mb-2">{{ title }}</h3>
                <p class="text-sm text-gray-700 mb-4">{{ description }}</p>
                <a
                  v-if="link"
                  :href="link"
                  target="_blank"
                  class="text-[#E85D04] underline hover:text-[#D0008E] text-sm font-medium"
                >
                  Visit Project →
                </a>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onBeforeUnmount } from 'vue';
  
  const props = defineProps<{
    isOpen: boolean;
    title: string;
    description: string;
    images: string[];
    link?: string;
  }>();
  
  const emit = defineEmits(['close']);
  const closeModal = () => emit('close');
  
  // Carousel state
  const currentIndex = ref(0);
  
  // Slide manually
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  };
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  };
  
  // Swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };
  const handleSwipe = () => {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) prevSlide();
    else if (swipeDistance < -50) nextSlide();
  };
  const setupSwipe = () => {
    const container = document.getElementById('carousel-container');
    if (!container) return;
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
  };
  const removeSwipe = () => {
    const container = document.getElementById('carousel-container');
    if (!container) return;
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchend', handleTouchEnd);
  };
  
  // Auto-slide
  const autoSlideInterval = ref<ReturnType<typeof setInterval> | null>(null);
  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.value = setInterval(() => {
      nextSlide();
    }, 5000);
  };
  const stopAutoSlide = () => {
    if (autoSlideInterval.value) {
      clearInterval(autoSlideInterval.value);
      autoSlideInterval.value = null;
    }
  };
  
  // Open/close modal logic
  watch(() => props.isOpen, (newVal) => {
    if (newVal) {
      currentIndex.value = 0;
      setupSwipe();
      startAutoSlide();
    } else {
      removeSwipe();
      stopAutoSlide();
    }
  });
  
  onBeforeUnmount(() => {
    removeSwipe();
    stopAutoSlide();
  });
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: transform 0.25s ease;
  }
  .scale-enter-from {
    transform: scale(0.95);
  }
  .scale-leave-to {
    transform: scale(0.95);
  }
  .animate-arrow {
    transition: transform 0.2s ease;
  }
  .animate-arrow:hover {
    transform: scale(1.15) translateY(-2px);
  }
  </style>
  