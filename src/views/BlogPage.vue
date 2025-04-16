<template>
  <div class="bg-[#FFF8F2] pt-20">
    <!-- Header -->
    <section class="px-6 sm:px-10 pb-6 text-center">
      <h1 class="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">Latest Blog Posts</h1>
      <p class="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
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
      />

      <select v-model="selectedCategory" class="px-4 py-2 rounded-md border text-sm shadow-sm">
        <option value="">All Categories</option>
        <option v-for="category in allCategories" :key="category" :value="category">
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
          class="min-w-[320px] max-w-xs bg-white rounded-xl shadow-lg p-4 snap-start flex-shrink-0 transition-all duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 class="text-lg font-bold text-[#E85D04] mb-2">{{ post.title }}</h2>
          <p class="text-sm text-gray-700 mb-3">{{ post.excerpt }}</p>
          <router-link
            :to="post.link"
            class="text-sm text-[#E85D04] font-semibold hover:underline"
          >
            Read More →
          </router-link>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 py-16">
        <p>No blog posts found.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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
  background: #d0008e;
  border-radius: 8px;
}
section::-webkit-scrollbar-track {
  background: transparent;
}
</style>
