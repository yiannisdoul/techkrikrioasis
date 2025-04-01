<template>
    <div class="mb-16" data-aos="fade-up">
      <h2 class="text-2xl font-bold text-[#D0008E] mb-6 text-center">{{ title }}</h2>
  
      <div class="relative overflow-hidden max-w-6xl mx-auto">
        <!-- Arrows -->
        <button
          @click="scrollLeft"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:scale-110 transition"
        >
          ◀
        </button>
        <button
          @click="scrollRight"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:scale-110 transition"
        >
          ▶
        </button>
  
        <!-- Project slider -->
        <div
          ref="sliderRef"
          class="flex gap-6 transition-all duration-700 ease-in-out"
          :style="{ transform: `translateX(-${scrollOffset}px)` }"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <PortfolioCard
            v-for="(project, index) in projects"
            :key="index"
            class="portfolio-card w-[320px] flex-shrink-0"
            :title="project.title"
            :cover="project.cover"
            :category="project.category"
            :onClick="() => $emit('open', project)"
          />
        </div>
  
        <!-- Scroll indicators -->
        <div class="flex justify-center mt-4 gap-2">
          <span
            v-for="(_, i) in totalDots"
            :key="i"
            class="w-2 h-2 rounded-full"
            :class="{
              'bg-[#E85D04]': i === currentDot,
              'bg-gray-300': i !== currentDot
            }"
          ></span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  import PortfolioCard from './PortfolioCard.vue';
  
  const props = defineProps<{
    title: string;
    projects: {
      title: string;
      cover: string;
      description: string;
      images: string[];
      category: string;
      link?: string;
    }[];
  }>();
  
  const emit = defineEmits(['open']);
  const sliderRef = ref<HTMLElement | null>(null);
  
  const cardWidth = 320;
  const visibleCards = 3;
  const scrollOffset = ref(0);
  
  const totalDots = computed(() => Math.ceil(props.projects.length / visibleCards));
  const currentDot = computed(() => Math.floor(scrollOffset.value / (cardWidth * visibleCards)));
  
  const scrollRight = () => {
    const totalWidth = cardWidth * props.projects.length;
    const maxOffset = totalWidth - cardWidth * visibleCards;
  
    scrollOffset.value += cardWidth * visibleCards;
    if (scrollOffset.value > maxOffset) {
      scrollOffset.value = 0;
    }
  };
  
  const scrollLeft = () => {
    const totalWidth = cardWidth * props.projects.length;
    const maxOffset = totalWidth - cardWidth * visibleCards;
  
    scrollOffset.value -= cardWidth * visibleCards;
    if (scrollOffset.value < 0) {
      scrollOffset.value = maxOffset;
    }
  };
  
  // Auto scroll
  let autoScroll: ReturnType<typeof setInterval> | null = null;
  const startAutoScroll = () => {
    stopAutoScroll();
    autoScroll = setInterval(scrollRight, 5000);
  };
  const stopAutoScroll = () => {
    if (autoScroll) clearInterval(autoScroll);
  };
  
  // Swipe touch support
  let startX = 0;
  const handleTouchStart = (e: TouchEvent) => {
    startX = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    const endX = e.changedTouches[0].screenX;
    const delta = endX - startX;
  
    if (delta > 50) scrollLeft();
    else if (delta < -50) scrollRight();
  };
  
  onMounted(startAutoScroll);
  onBeforeUnmount(stopAutoScroll);
  </script>
  
  <style scoped>
  ::-webkit-scrollbar {
    display: none;
  }
  </style>
  