<template>
  <section 
    class="pt-6 pb-20 px-4 sm:px-8 lg:px-16 scroll-smooth"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : '#FFF8F2'
    }"
  >

    <!-- Section Heading -->
    <p 
      class="text-xl font-medium text-center mb-6"
      :style="{
        color: themeStore.isDarkMode ? '#D1D5DB' : '#4B5563'
      }"
    >
      Choose a bundled package that suits your business stage.
    </p>
    
    <!-- Scrollable Bundled Packages with Scroll Hint -->
    <div class="relative">
      <!-- FLEX GRID of all packages -->
      <div
        class="flex flex-row sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 overflow-x-auto sm:overflow-visible pb-4 snap-x snap-mandatory"
      >
        <div
          v-for="pkg in packages"
          :key="pkg.key"
          class="min-w-[70vw] sm:min-w-0 sm:w-auto snap-start snap-always rounded-xl shadow-md border p-4 flex flex-col justify-between"
          :style="{
            backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white',
            borderColor: themeStore.isDarkMode ? '#2D3748' : '#E5E7EB'
          }"
        >
          <!-- Title Subtitle & Price -->
          <div class="mb-4">
            <h3 
              class="text-lg font-bold text-center"
              :style="{
                color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
              }"
            >{{ pkg.title }}</h3>
            <p 
              class="text-center text-sm"
              :style="{
                color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
              }"
            >💰 Value: {{ pkg.value }}</p>
            <p 
              class="text-center text-xl font-semibold mt-1"
              :style="{
                color: themeStore.isDarkMode ? '#FF7E33' : '#EA580C'
              }"
            >{{ pkg.price }}</p>
            <div
              class="text-center font-semibold text-lg sm:text-xl mt-2"
              :class="{
                'text-red-500': pkg.key === 'Starter',
                'text-yellow-500': pkg.key === 'Growth',
                'text-orange-500': pkg.key === 'Pro',
                'text-blue-500': pkg.key === 'ScaleUp',
                'text-purple-500': pkg.key === 'Enterprise'
              }"
            >
              {{ pkg.subtitle }}
            </div>
          </div>

          <!-- Scrollable Categories -->
          <div class="overflow-x-auto flex flex-col gap-2 max-w-full pr-2">
            <div
              v-for="(category, i) in pkg.categories"
              :key="i"
              class="border-b py-2 cursor-pointer transition min-w-[250px]"
              :style="{
                borderColor: themeStore.isDarkMode ? '#2D3748' : '#E5E7EB',
                color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
              }"
              @click="toggleSection(pkg.key, i)"
            >
              <div class="flex justify-between items-center">
                <span>{{ category.icon }} {{ category.name }}</span>
                <span
                  :class="[
                    'text-lg transition-transform duration-300',
                    isExpanded(pkg.key, i) ? '' : ''
                  ]"
                  :style="{
                    color: isExpanded(pkg.key, i) 
                      ? (themeStore.isDarkMode ? '#FF7E33' : '#EA580C') 
                      : (themeStore.isDarkMode ? '#9CA3AF' : '#6B7280')
                  }"
                >
                  {{ isExpanded(pkg.key, i) ? '−' : '+' }}
                </span>
              </div>

              <ul
                v-if="isExpanded(pkg.key, i)"
                class="mt-2 ml-5 list-disc text-sm space-y-1"
                :style="{
                  color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
                }"
              >
                <li v-for="(item, j) in category.items" :key="j">{{ item }}</li>
              </ul>
            </div>
          </div>

          <!-- Action Button -->
          <AnimatedButton class="mt-4" label="Get Started!" @click="openWizard(pkg)" />
        </div>
      </div>

      <!-- ✨ Right Fading Scroll Indicator (Mobile Only) -->
      <div 
        class="pointer-events-none absolute right-0 top-0 h-full w-12 hidden sm:hidden"
        :style="{
          background: themeStore.isDarkMode 
            ? 'linear-gradient(to left, #121212, rgba(18, 18, 18, 0.6), transparent)'
            : 'linear-gradient(to left, #FFF8F2, rgba(255, 248, 242, 0.6), transparent)'
        }"
      ></div>
    </div>

    <!-- Wizard Modal -->
    <component
      v-if="showWizard && selectedPackage?.key"
      :is="wizardComponents[selectedPackage.key]"
      :base-package="selectedPackage"
      @close="showWizard = false"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AnimatedButton from '@/components/ui/AnimatedButton.vue'
import { useThemeStore } from '../../stores/ThemeStore';

const themeStore = useThemeStore();

// Wizard Components
import StarterWizard from './wizards/StarterWizard.vue'
import GrowthWizard from './wizards/GrowthWizard.vue'
import ProWizard from './wizards/ProWizard.vue'
import ScaleUpWizard from './wizards/ScaleUpWizard.vue'
import EnterpriseWizard from './wizards/EnterpriseWizard.vue'

// Data & Types
import { packages } from '../services/BundledServicesData'
import type { Package } from '../services/BundledServicesData'

// Wizard Lookup
const wizardComponents = {
  Starter: StarterWizard,
  Growth: GrowthWizard,
  Pro: ProWizard,
  ScaleUp: ScaleUpWizard,
  Enterprise: EnterpriseWizard
}

const showWizard = ref(false)
const selectedPackage = ref<Package | null>(null)
const expandedStates = ref<Record<string, number[]>>({})

function toggleSection(key: string, index: number) {
  expandedStates.value[key] ??= []
  const i = expandedStates.value[key].indexOf(index)
  if (i === -1) expandedStates.value[key].push(index)
  else expandedStates.value[key].splice(i, 1)
}

const isExpanded = (key: string, index: number) =>
  expandedStates.value[key]?.includes(index)

function openWizard(pkg: Package) {
  selectedPackage.value = pkg
  showWizard.value = true
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.Aos) {
    window.Aos.init({ duration: 800, once: true })
  }
})
</script>

<style scoped>
.scroll-smooth {
  scroll-behavior: smooth;
}
.rotate-45 {
  transform: rotate(45deg);
}
</style>