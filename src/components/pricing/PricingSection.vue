<template>
  <section class="py-20 px-4 sm:px-8 lg:px-16 bg-beige scroll-smooth">
    <!-- Mobile CTA at top -->
    <div class="sm:hidden text-center mb-10">
      <h2 class="text-xl font-bold mb-2">Not sure which service fits?</h2>
      <p class="text-gray-600 mb-4 text-sm">
        Answer a few quick questions to build your ideal digital solution.
      </p>
      <AnimatedButton label="🛠️ Build Your Package" @click="showWizard = true" />
    </div>

    <!-- Section Heading -->
    <h2 class="text-3xl font-bold text-center mb-12">Bundled Service Packages</h2>

    <!-- Package Grid (Snap Scroll on Mobile) -->
    <div
      class="flex flex-row sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 overflow-x-auto sm:overflow-visible pb-4 snap-x snap-mandatory"
    >
      <div
        v-for="pkg in packages"
        :key="pkg.key"
        class="min-w-[85vw] sm:min-w-0 sm:w-auto snap-start snap-always rounded-xl bg-white shadow-md border border-gray-200 p-4 flex flex-col justify-between"
      >
        <!-- Title & Price -->
        <div class="mb-4">
          <h3 class="text-lg font-bold text-center">{{ pkg.title }}</h3>
          <p class="text-center text-gray-700 text-sm">💰 Value: {{ pkg.value }}</p>
          <p class="text-center text-xl font-semibold mt-1 text-orange-600">{{ pkg.price }}</p>
        </div>

        <!-- Scrollable Categories -->
        <div class="overflow-x-auto flex flex-col gap-2 max-w-full pr-2">
          <div
            v-for="(category, i) in pkg.categories"
            :key="i"
            class="border-b py-2 cursor-pointer transition hover:text-orange-600 min-w-[250px]"
            @click="toggleSection(pkg.key, i)"
          >
            <div class="flex justify-between items-center">
              <span>{{ category.icon }} {{ category.name }}</span>
              <span
                :class="[
                  'text-lg transition-transform duration-300',
                  isExpanded(pkg.key, i) ? 'text-orange-500' : 'text-gray-500'
                ]"
              >
                {{ isExpanded(pkg.key, i) ? '−' : '+' }}
              </span>
            </div>

            <ul
              v-if="isExpanded(pkg.key, i)"
              class="mt-2 ml-5 list-disc text-sm text-gray-700 space-y-1"
            >
              <li v-for="(item, j) in category.items" :key="j">{{ item }}</li>
            </ul>
          </div>
        </div>

        <!-- Action Button -->
        <AnimatedButton class="mt-4" label="Get Started!" @click="openWizard(pkg)" />
      </div>
    </div>

    <!-- Desktop CTA -->
    <div class="hidden sm:block text-center mt-16">
      <h2 class="text-2xl font-bold mb-4">Ready to bring your ideas to life?</h2>
      <p class="text-gray-600 mb-6">
        Choose your services and let us build a custom quote tailored to your goals.
      </p>
      <AnimatedButton label="🚀 Start Building" @click="showWizard = true" />
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
