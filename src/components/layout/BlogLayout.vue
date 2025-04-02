<template>
    <div class="bg-[#FFF8F2] px-6 pt-20 pb-10 text-gray-900">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-bold mb-2 text-[#E85D04]">{{ title }}</h1>
        <p class="text-sm text-gray-500 mb-6">Published: {{ date }}</p>
  
        <img
          v-if="image"
          :src="image"
          alt="Featured"
          class="w-full h-auto rounded-lg mb-8"
        />
  
        <article class="prose prose-lg max-w-none">
          <slot />
        </article>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string
    date: string
    image?: string
  }>()
  </script>
  