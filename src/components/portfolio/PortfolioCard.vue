<!-- <template>
    <div
      @click="onClick"
      class="bg-white p-6 rounded-lg shadow-md text-center transition card-hover cursor-pointer hover:shadow-lg"
      :data-aos="animation"
    >
      <img :src="cover" class="h-32 w-full object-cover rounded mb-4" />
      <h3 class="text-base sm:text-lg font-semibold text-[#D0008E]">
        {{ title }}
      </h3>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
    cover: string;
    animation?: string;
    onClick: () => void;
  }>();
  </script>
   -->

<template>
<div class="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 cursor-pointer text-center portfolio-card" @click="onClick">
    <img :src="cover" alt="Project cover" class="w-full h-40 object-cover rounded mb-4" />
    <h3 class="text-[#D0008E] font-semibold text-lg mb-2">{{ title }}</h3>
    <span
    class="text-white text-xs px-3 py-1 rounded-full font-medium inline-block"
    :style="{ backgroundColor: tagColors[category as keyof typeof tagColors] || '#333' }"
    >
    {{ category }}
    </span>
</div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    cover: string
    category: string
    onClick?: () => void
}>()

// reuse from parent color map
const tagColors = {
    'Web Development': '#D0008E',
    'Mobile App Development': '#E85D04',
    'SEO': '#1F78B4',
    'E-Commerce': '#FF9F1C',
    'Digital Marketing': '#4CAF50',
    'Drone Photography': '#7C3AED',
    'Graphic Design': '#F43F5E',
    'Strategy & Consulting': '#0D9488',
}
</script>

<style scoped>
    .portfolio-card {
        min-height: 300px;
    }
</style>
