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

    <!-- Blog Cards -->
    <section class="overflow-x-auto snap-x snap-mandatory px-4 pb-12">
      <div v-if="visiblePosts.length" class="flex space-x-6 w-max">
        <div
          v-for="(post, index) in visiblePosts"
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

    <!-- Load More -->
    <div v-if="filteredPosts.length > postLimit" class="text-center pb-16">
      <button
        @click="loadMore"
        class="px-6 py-2 rounded-md bg-[#E85D04] text-white text-sm font-semibold hover:bg-[#d45203] transition"
      >
        Load More
      </button>
    </div>
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

// Load blog .vue files
const blogModules = import.meta.glob('@/components/blog/*.vue', { eager: true })

// Step 1: Safely collect metadata
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

// Step 2: Filter + cast safely
const rawPosts = rawMapped.filter(Boolean) as BlogPost[]

// Step 3: Sort by date
const allPosts: BlogPost[] = [...rawPosts].sort((a, b) => {
  const d1 = new Date(`1 ${a.date}`)
  const d2 = new Date(`1 ${b.date}`)
  return d2.getTime() - d1.getTime()
})

// State
const searchQuery = ref('')
const selectedCategory = ref('')
const postLimit = ref(4)

const filteredPosts = computed(() =>
  allPosts.filter((post) => {
    const matchCat = selectedCategory.value === '' || post.category === selectedCategory.value
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCat && matchSearch
  })
)

const visiblePosts = computed(() => filteredPosts.value.slice(0, postLimit.value))
const loadMore = () => postLimit.value += 4

const allCategories = Array.from(new Set(allPosts.map(p => p.category))).sort()
</script>

<style scoped>
section::-webkit-scrollbar {
  height: 16px;
}
section::-webkit-scrollbar-thumb {
  background: #d0008e;
  border-radius: 10px;
}
section::-webkit-scrollbar-track {
  background: transparent;
}
</style>
