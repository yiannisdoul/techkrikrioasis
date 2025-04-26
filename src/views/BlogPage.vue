<template>
  <div 
    class="pt-20"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : '#FFF8F2' 
    }"
  >
    <!-- Header -->
    <section class="px-6 sm:px-10 pb-6 text-center">
      <h1 
        class="text-3xl sm:text-4xl font-bold mb-2"
        :style="{
          color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
        }"
      >Latest Blog Posts</h1>
      <p 
        class="text-sm sm:text-base max-w-2xl mx-auto"
        :style="{
          color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
        }"
      >
        Insights, tutorials, and case studies from the Tech Kri-Kri Oasis team.
      </p>
    </section>

    <!-- Filters -->
    <section class="flex flex-wrap justify-center items-center gap-4 px-6 sm:px-10 pb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search posts..."
        class="px-4 py-2 rounded-md border text-sm w-64 shadow-sm"
        :style="{
          backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white',
          borderColor: themeStore.isDarkMode ? '#2D3748' : '#E5E7EB',
          color: themeStore.isDarkMode ? '#E2E8F0' : 'inherit'
        }"
      />

      <select 
        v-model="selectedCategory" 
        class="px-4 py-2 rounded-md border text-sm shadow-sm"
        :style="{
          backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white',
          borderColor: themeStore.isDarkMode ? '#2D3748' : '#E5E7EB',
          color: themeStore.isDarkMode ? '#E2E8F0' : 'inherit'
        }"
      >
        <option value="">All Categories</option>
        <option 
          v-for="category in allCategories" 
          :key="category" 
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </section>

    <!-- Blog Cards (Horizontal Scroll) -->
    <section class="overflow-x-auto snap-x snap-mandatory px-4 pb-12">
      <div v-if="filteredPosts.length" class="flex space-x-6 w-max">
        <div
          v-for="(post, index) in filteredPosts"
          :key="index"
          class="min-w-[320px] max-w-xs rounded-xl shadow-lg p-4 snap-start flex-shrink-0 transition-all duration-300 hover:scale-105"
          :style="{
            backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white'
          }"
          data-aos="fade-up"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 
            class="text-lg font-bold mb-2"
            :style="{
              color: themeStore.isDarkMode ? '#FF7E33' : '#E85D04'
            }"
          >{{ post.title }}</h2>
          <p 
            class="text-sm mb-3"
            :style="{
              color: themeStore.isDarkMode ? '#D1D5DB' : '#4B5563'
            }"
          >{{ post.excerpt }}</p>
          <router-link
            :to="post.link"
            class="text-sm font-semibold hover:underline"
            :style="{
              color: themeStore.isDarkMode ? '#FF7E33' : '#E85D04'
            }"
          >
            Read More →
          </router-link>
        </div>
      </div>

      <div 
        v-else 
        class="text-center py-16"
        :style="{
          color: themeStore.isDarkMode ? '#9CA3AF' : '#6B7280'
        }"
      >
        <p>No blog posts found.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useThemeStore } from '../stores/ThemeStore';

const themeStore = useThemeStore();

type BlogPost = {
  title: string
  date: string
  image: string
  excerpt: string
  link: string
  category?: string
}

const blogModules = import.meta.glob([
  '@/components/blog/**/*.vue',
  '!@/components/blog/_templates/**'
], { eager: true })

// ✅ Map metadata and exclude incomplete or invalid files
const rawMapped = Object.entries(blogModules).map(([path, module]) => {
  const name = path.split('/').pop()?.replace('.vue', '') ?? ''
  const meta = (module as any).blogMeta

  if (!meta || !meta.title || !meta.image || !meta.excerpt || !meta.date) return null

  return {
    title: meta.title,
    date: meta.date,
    image: meta.image,
    excerpt: meta.excerpt,
    link: `/blog/${name}`,
    category: meta.category || 'General'
  }
})

// ✅ Clean, sorted list
const rawPosts = rawMapped.filter(Boolean) as BlogPost[]
const allPosts: BlogPost[] = [...rawPosts].sort((a, b) => {
  const d1 = new Date(`1 ${a.date}`)
  const d2 = new Date(`1 ${b.date}`)
  return d2.getTime() - d1.getTime()
})

// 🔍 Filter state
const searchQuery = ref('')
const selectedCategory = ref('')

const filteredPosts = computed(() =>
  allPosts.filter((post) => {
    const matchCat = selectedCategory.value === '' || post.category === selectedCategory.value

    const queryWords = searchQuery.value.toLowerCase().split(' ').filter(Boolean)
    const matchSearch = queryWords.every(word =>
      post.title.toLowerCase().includes(word) ||
      post.excerpt.toLowerCase().includes(word)
    )

    return matchCat && matchSearch
  })
)

const allCategories = Array.from(new Set(allPosts.map(p => p.category))).sort()
</script>

<style scoped>
section::-webkit-scrollbar {
  height: 14px;
}
section::-webkit-scrollbar-thumb {
  background: v-bind(themeStore.isDarkMode ? '#FF4DC1' : '#d0008e');
  border-radius: 8px;
}
section::-webkit-scrollbar-track {
  background: transparent;
}
</style>