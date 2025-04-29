<template>
  <div class="bg-[#fff8f1] pt-24 px-6 sm:px-10 md:px-20 text-[#1A1A1A] min-h-screen">
    <!-- Title -->
    <h1 class="text-4xl sm:text-5xl font-bold text-center mb-4">Our Portfolio</h1>
    <p class="text-center text-gray-600 max-w-3xl mx-auto mb-10">
      Browse our past projects across web, mobile, marketing and tech. Filter by specialty or explore our range of impactful builds. 
    </p>

    <!-- Filter Legend -->
    <div class="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium">
      <button
        v-for="(color, category) in tagColors"
        :key="category"
        @click="toggleCategory(category)"
        :class="[
          'flex items-center gap-2 px-3 py-1 rounded-full border',
          selectedCategories.includes(category) ? 'text-white font-semibold' : 'bg-white hover:bg-gray-100',
        ]"
        :style="{
          borderColor: color,
          color: selectedCategories.includes(category) ? 'white' : color,
          backgroundColor: selectedCategories.includes(category) ? color : 'white'
        }"
      >
        <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: color }"></span>
        {{ category }}
      </button>
      <button
        v-if="selectedCategories.length"
        @click="selectedCategories = []"
        class="text-gray-500 underline hover:text-gray-700"
      >
        Reset
      </button>
    </div>

    <!-- Loading spinner while projects are initializing -->
    <div v-if="loading" class="flex justify-center py-12">
      <LoadingSpinner size="large" text="Loading projects..." />
    </div>

    <!-- Portfolio Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <PortfolioCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :title="project.title"
        :cover="project.image[0]"
        :categories="project.categories"
        @click="openModal(project)"
      />
    </div>

    <!-- ChimpTech Solutions Note -->
    <div class="max-w-3xl mx-auto text-center text-sm text-gray-500 mt-12 px-4">
      <p>
        Some projects were proudly completed in collaboration with 
        <span class="font-semibold text-[#D0008E]">ChimpTech Solutions</span>, 
        a company that has since ceased operations. We value the contributions made during these partnerships 
        and are grateful for the role they played in delivering exceptional results.
      </p>
    </div>

    <!-- Modal -->
    <PortfolioModal
      v-if="selectedProject"
      :isOpen="true"
      :title="selectedProject.title"
      :description="selectedProject.description"
      :images="selectedProject.image"
      :link="selectedProject.liveLink"
      :socialLinks="selectedProject.socialLinks" 
      @close="selectedProject = null"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted  } from 'vue'
import PortfolioCard from '../components/portfolio/PortfolioCard.vue'
import PortfolioModal from '../components/portfolio/PortfolioModal.vue'
import LoadingSpinner from '../components/ui/LoadingSpinner.vue'

// ❗ Fixed Import (relative path like BundledServicesData)
import { projects } from '../components/portfolio/PortfolioData'

interface Project {
  title: string
  description: string
  image: string[]
  liveLink: string
  socialLinks?: { type: string; url: string }[]
  categories: string[]
}

const selectedProject = ref<Project | null>(null)
const selectedCategories = ref<string[]>([])
const loading = ref(true)

const tagColors: Record<string, string> = {
  'Web Development': '#D0008E',
  'Mobile App Development': '#E85D04',
  'SEO': '#1F78B4',
  'E-Commerce': '#FF9F1C',
  'Digital Marketing': '#4CAF50',
  'Drone Photography': '#7C3AED',
  'Graphic Design': '#F43F5E',
  'Strategy & Consulting': '#0D9488',
}

const toggleCategory = (category: string) => {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter((c) => c !== category)
  } else {
    selectedCategories.value.push(category)
  }
}

const filteredProjects = computed(() => {
  if (!selectedCategories.value.length) return projects
  return projects.filter((p) =>
    p.categories.some((cat) => selectedCategories.value.includes(cat))
  )
})

const openModal = (project: any) => {
  selectedProject.value = project
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
});
</script>
