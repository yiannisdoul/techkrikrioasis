<template>
  <div 
    class="px-6 pt-20 pb-10"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : '#FFF8F2',
      color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
    }"
  >
    <div class="max-w-3xl mx-auto">
      <h1 
        class="text-3xl sm:text-4xl font-bold mb-2"
        :style="{
          color: themeStore.isDarkMode ? '#FF7E33' : '#E85D04'
        }"
      >{{ title }}</h1>
      <p 
        class="text-sm mb-6"
        :style="{
          color: themeStore.isDarkMode ? '#9CA3AF' : '#6B7280'
        }"
      >Published: {{ date }}</p>

      <img
        v-if="image"
        :src="image"
        alt="Featured"
        class="w-full h-auto rounded-lg mb-8"
      />

      <!-- ✅ Tailwind Typography Prose Styling with Dark Mode -->
      <article 
        :class="[
          'prose prose-lg max-w-none',
          themeStore.isDarkMode ? 'prose-dark' : 'prose-orange'
        ]"
      >
        <slot />
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../../stores/ThemeStore';

const themeStore = useThemeStore();

defineProps<{
  title: string
  date: string
  image?: string
}>()
</script>

<style>
/* Add any additional dark mode custom styling here if needed */
.prose-dark {
  --tw-prose-body: #e2e8f0;
  --tw-prose-headings: #f8fafc;
  --tw-prose-lead: #e2e8f0;
  --tw-prose-links: #FF7E33;
  --tw-prose-bold: #f8fafc;
  --tw-prose-counters: #94a3b8;
  --tw-prose-bullets: #94a3b8;
  --tw-prose-hr: #475569;
  --tw-prose-quotes: #FF7E33;
  --tw-prose-quote-borders: #334155;
  --tw-prose-captions: #94a3b8;
  --tw-prose-code: #f8fafc;
  --tw-prose-pre-code: #e2e8f0;
  --tw-prose-pre-bg: #1e293b;
  --tw-prose-th-borders: #475569;
  --tw-prose-td-borders: #334155;
}
</style>