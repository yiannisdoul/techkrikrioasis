<template>
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
  