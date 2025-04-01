<template>
  <section class="py-20 px-4 sm:px-8 lg:px-16" data-aos="fade-up">
    <h2 class="text-3xl font-bold text-center mb-12">Bundled Service Packages</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      <div
        v-for="(packageItem, index) in packages"
        :key="index"
        class="rounded-2xl border border-gray-300 bg-gradient-to-b from-[#f3efe7] to-[#fffaf5] shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] hover:scale-[1.03] hover:ring-2 hover:ring-orange-400 transition-all duration-300 ease-in-out aos-fade"
        :data-aos="'fade-up'"
        :data-aos-delay="index * 150"
      >
        <!-- Inner Glow Container -->
        <div class="rounded-xl bg-white/90 shadow-inner p-4 flex flex-col justify-between gap-4">

          <!-- Optional Lottie Icon -->
          <LottieIcon :name="packageItem.title.toLowerCase()" class="w-16 h-16 mx-auto mb-2" />

          <!-- Title & Price -->
          <div>
            <h3 class="text-lg font-semibold text-center text-gray-900 mb-1">
              {{ packageItem.title }}
            </h3>
            <div class="h-1 w-8 bg-orange-500 mx-auto mb-4 rounded-full"></div>
            <p class="text-center text-2xl font-bold text-gray-800 mb-6">
              Starting from ${{ packageItem.price }}
            </p>

            <!-- Features -->
            <ul class="space-y-2 text-sm text-gray-700">
              <li
                v-for="(feature, i) in packageItem.features"
                :key="i"
                class="flex items-start"
              >
                <span class="text-orange-500 mt-0.5 mr-2">•</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Reusable Button Component -->
          <AnimatedButton
            label="Get Started"
            class="mt-4"
            @click="openWizard(packageItem)"
          />
        </div>
      </div>
    </div>

    <!-- Modal Wizard -->
    <component
      v-if="showWizard && selectedPackage?.title"
      :is="wizardComponents[selectedPackage.title]"
      :base-package="selectedPackage"
      @close="showWizard = false"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 🧩 Wizards
import StarterWizard from './wizards/StarterWizard.vue'
import EssentialsWizard from './wizards/EssentialsWizard.vue'
import GrowthWizard from './wizards/GrowthWizard.vue'
import ProWizard from './wizards/ProWizard.vue'
import EnterpriseWizard from './wizards/EnterpriseWizard.vue'

// ✨ Global UI components
import AnimatedButton from '@/components/ui/AnimatedButton.vue'
import LottieIcon from '@/components/ui/LottieIcon.vue'

type Package = {
  title: keyof typeof wizardComponents
  price: number
  features: string[]
}

const selectedPackage = ref<Package | null>(null)
const showWizard = ref(false)

function openWizard(packageItem: Package) {
  selectedPackage.value = packageItem
  showWizard.value = true
}

const wizardComponents = {
  Starter: StarterWizard,
  Essentials: EssentialsWizard,
  Growth: GrowthWizard,
  Pro: ProWizard,
  Enterprise: EnterpriseWizard
}

const packages: Package[] = [
  {
    title: 'Starter',
    price: 2000,
    features: ['Responsive Website (5 pages)', 'Basic Logo & Brand Colors', '1-Week Launch Support']
  },
  {
    title: 'Essentials',
    price: 5000,
    features: ['10-Page Custom Design', 'SEO Setup', '30-Day Support']
  },
  {
    title: 'Growth',
    price: 10000,
    features: ['SEO + Blog Setup', 'Email Marketing Ready', '2-Month Maintenance']
  },
  {
    title: 'Pro',
    price: 25000,
    features: ['Mobile App + CMS', 'Advanced Funnels', '3-Month Priority Support']
  },
  {
    title: 'Enterprise',
    price: 50000,
    features: ['Native Apps & Integrations', 'Custom Dashboard & CRM', '6-Month SLA Support']
  }
]

onMounted(() => {
  if (typeof window !== 'undefined' && window.Aos) {
    window.Aos.init({ duration: 800, once: true })
  }
})
</script>
