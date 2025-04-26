<template>
  <div 
    class="pt-24 px-6 sm:px-10 md:px-20 min-h-screen"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : '#fff8f1',
      color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
    }"
  >
    <!-- Title -->
    <h1 
      class="text-4xl sm:text-5xl font-bold text-center mb-4"
      :style="{
        color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
      }"
    >Our Portfolio</h1>
    <p 
      class="text-center max-w-3xl mx-auto mb-10"
      :style="{
        color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
      }"
    >
      Browse our past projects across web, mobile, marketing and tech. Filter by specialty or explore our range of impactful builds. 
    </p>

    <!-- Filter Legend -->
    <div class="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium">
      <button
        v-for="(color, category) in getTagColors()"
        :key="category"
        @click="toggleCategory(category)"
        :class="[
          'flex items-center gap-2 px-3 py-1 rounded-full border',
          selectedCategories.includes(category) ? 'font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800',
        ]"
        :style="{
          borderColor: color,
          color: selectedCategories.includes(category) ? 'white' : color,
          backgroundColor: selectedCategories.includes(category) ? color : (themeStore.isDarkMode ? '#1E1E1E' : 'white')
        }"
      >
        <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: color }"></span>
        {{ category }}
      </button>
      <button
        v-if="selectedCategories.length"
        @click="selectedCategories = []"
        class="underline hover:text-gray-700 dark:hover:text-gray-300"
        :style="{
          color: themeStore.isDarkMode ? '#9CA3AF' : '#6B7280'
        }"
      >
        Reset
      </button>
    </div>

    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
    <div class="max-w-3xl mx-auto text-center text-sm mt-12 px-4"
      :style="{
        color: themeStore.isDarkMode ? '#9CA3AF' : '#6B7280'
      }"
    >
      <p>
        Some projects were proudly completed in collaboration with 
        <span 
          class="font-semibold"
          :style="{
            color: themeStore.isDarkMode ? '#FF4DC1' : '#D0008E'
          }"
        >ChimpTech Solutions</span>, 
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
import { ref, computed } from 'vue'
import { useThemeStore } from '../stores/ThemeStore';
import PortfolioCard from '../components/portfolio/PortfolioCard.vue'
import PortfolioModal from '../components/portfolio/PortfolioModal.vue'

const themeStore = useThemeStore();

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

// Function to get tag colors, potentially adjusting for dark mode
const getTagColors = () => {
  const baseColors: Record<string, string> = {
    'Web Development': themeStore.isDarkMode ? '#FF4DC1' : '#D0008E',
    'Mobile App Development': themeStore.isDarkMode ? '#FF7E33' : '#E85D04',
    'SEO': themeStore.isDarkMode ? '#38BDF8' : '#1F78B4',
    'E-Commerce': themeStore.isDarkMode ? '#FFC04D' : '#FF9F1C',
    'Digital Marketing': themeStore.isDarkMode ? '#6EE7B7' : '#4CAF50',
    'Drone Photography': themeStore.isDarkMode ? '#A78BFA' : '#7C3AED',
    'Graphic Design': themeStore.isDarkMode ? '#FB7185' : '#F43F5E',
    'Strategy & Consulting': themeStore.isDarkMode ? '#5EEAD4' : '#0D9488',
  }
  
  return baseColors;
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
</script>