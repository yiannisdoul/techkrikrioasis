<template>
    <button
      @click="onClick"
      class="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow hover:shadow-md transition card-hover w-full text-center"
      :data-aos="animation"
    >
      <img :src="icon" class="h-12 w-12 mb-4" alt="service icon" />
      <h3 class="font-semibold text-base sm:text-lg text-[#D0008E]">
        {{ title }}
      </h3>
    </button>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
    icon: string;
    animation?: string;
    onClick: () => void;
  }>();
  </script>
  