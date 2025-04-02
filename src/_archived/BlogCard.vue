<template>
    <router-link :to="`/blog/${slug}`" class="block bg-white rounded-xl shadow hover:shadow-lg transition p-6 space-y-2">
      <h3 class="text-lg font-bold text-[#D0008E]">{{ title }}</h3>
      <p class="text-sm text-gray-600 line-clamp-3">{{ excerpt }}</p>
      <span class="text-xs text-gray-400">{{ date }}</span>
    </router-link>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string
    excerpt: string
    slug: string
    date: string
  }>()
  </script>
  