<!-- components/services/ServiceCard.vue -->
<template>
    <div
      @click="$emit('open')"
      class="cursor-pointer bg-white rounded-xl p-6 text-center shadow transition-all border border-transparent hover:shadow-lg hover:border-[#E85D04] hover:-translate-y-1 flex flex-col items-center justify-between"
    >
      <img :src="icon" class="h-12 w-12 mb-4" alt="service icon" />
      <h3 class="text-[#D0008E] font-semibold text-base sm:text-lg mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600 mb-4">{{ description }}</p>
      <button class="text-sm text-white bg-[#D0008E] hover:bg-[#e85d04] px-4 py-2 rounded-full transition">
        Learn More
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string
    icon: string
    description: string
  }>()
  defineEmits(['open'])
  </script>
  