<template>
  <section class="py-20 px-4 sm:px-8 lg:px-16 bg-beige min-h-screen">
    <h1 class="text-4xl font-bold text-center mb-12">Our Services & Packages</h1>

    <!-- 5-Tier Main Bundled Packages -->
    <PricingSection class="mb-20" />

    <!-- Build My Package Wizard CTA (after bundles) -->
    <div class="text-center mb-16 px-4">
      <h2 class="text-2xl font-bold mb-4">Not sure which service fits?</h2>
      <p class="mb-6 text-gray-600">Answer a few quick questions to build your ideal digital solution.</p>
      <div class="flex justify-center">
        <AnimatedButton label="🛠️ Build Your Package" @click="showWizard = true" />
      </div>
    </div>

<!-- Individual Services (with Modals) -->
<div
  class="flex flex-row sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4"
>
  <div
    v-for="(service, index) in services"
    :key="index"
    class="snap-start min-w-[85vw] sm:min-w-0"
  >
    <ServiceCard
      :title="service.title"
      :icon="service.icon"
      :description="service.description"
      @open="selected = service"
    />
  </div>
</div>

    <!-- Modal with Dynamic Content -->
    <ServiceModal :isOpen="selected !== null" @close="selected = null">
      <template v-if="selected">
        <h3 class="text-2xl font-bold text-[#D0008E] mb-6 text-center">{{ selected.title }}</h3>
        <p class="text-center text-gray-600 mb-8">{{ selected.description }}</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            v-for="(tier, index) in selected.tiers"
            :key="index"
            class="border rounded-lg p-5 shadow text-left hover:shadow-lg transition"
          >
            <h4 class="text-xl font-bold mb-2">{{ tier.name }}</h4>
            <p class="text-sm mb-2 text-gray-700">{{ tier.headline }}</p>
            <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li v-for="(feature, i) in tier.features" :key="i">{{ feature }}</li>
            </ul>
          </div>
        </div>

        <div class="text-center">
          <AnimatedButton label="🚀 Build My Package" @click="openWizard" />
        </div>
      </template>
    </ServiceModal>

    <!-- Build My Package CTA (before footer) -->
    <div class="text-center mt-20 px-4">
      <h2 class="text-2xl font-bold mb-4">Ready to bring your ideas to life?</h2>
      <p class="mb-6 text-gray-600">Choose your services and let us build a custom quote tailored to your goals.</p>
      <div class="flex justify-center">
        <AnimatedButton label="🚀 Start Building" @click="showWizard = true" />
      </div>
    </div>

    <!-- Build Your Package Wizard Modal -->
    <BuildYourPackageWizard v-if="showWizard" @close="showWizard = false" />
  </section>
</template>

<script setup>
import { ref } from 'vue'

import PricingSection from '@/components/Pricing/PricingSection.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import ServiceModal from '@/components/services/ServiceModal.vue'
import AnimatedButton from '@/components/ui/AnimatedButton.vue'
import BuildYourPackageWizard from '@/components/pricing/wizards/BuildYourPackageWizard.vue'
import { services } from '@/components/services/ServicesData'

const selected = ref(null)
const showWizard = ref(false)

const openWizard = () => {
  selected.value = null
  showWizard.value = true
}
</script>

<style scoped>
.bg-beige {
  background-color: #f8f5f0;
}
</style>
