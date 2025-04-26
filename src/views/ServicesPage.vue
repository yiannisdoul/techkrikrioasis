<template>
  <section 
    class="py-20 px-4 sm:px-8 lg:px-16 min-h-screen"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : '#f8f5f0'
    }"
  >
    <h1 
      class="text-4xl sm:text-5xl font-bold text-center mb-4"
      :style="{
        color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
      }"
    >Our Services & Packages</h1>
    <p 
      class="text-center max-w-3xl mx-auto mb-0"
      :style="{
        color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
      }"
    >
      Explore our tiered digital service bundles or choose à la carte solutions tailored to your business goals.
    </p>

    <!-- 5-Tier Main Bundled Packages -->
    <PricingSection />

    <!-- Build My Package Wizard CTA (after bundles) -->
    <div class="text-center mb-16 px-4">
      <h2 
        class="text-2xl font-bold mb-4"
        :style="{
          color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
        }"
      >Not sure which service fits?</h2>
      <p 
        class="mb-6"
        :style="{
          color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
        }"
      >Answer a few quick questions to build your ideal digital solution.</p>
      <div class="flex justify-center">
        <AnimatedButton label="🛠️ Build Your Package" @click="showWizard = true" />
      </div>
    </div>

    <!-- Individual Services Subtitle -->
    <h2 
      class="text-2xl font-bold text-center mt-20 mb-4"
      :style="{
        color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
      }"
    >
      Browse Individual Services
    </h2>
    <p 
      class="text-center text-base mb-10"
      :style="{
        color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
      }"
    >
      Select one or more services that match your current project needs.
    </p>

    <!-- Scrollable Individual Services with Scroll Hint -->
    <div class="relative">
      <div
        class="flex flex-row sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="snap-start min-w-[70vw] sm:min-w-0"
        >
          <ServiceCard
            :title="service.title"
            :icon="service.icon"
            :description="service.description"
            @open="selected = service"
          />
        </div>
      </div>

      <!-- ✨ Right Fading Scroll Indicator (Mobile Only) -->
      <div 
        class="pointer-events-none absolute right-0 top-0 h-full w-12 hidden sm:hidden"
        :style="{
          background: themeStore.isDarkMode 
            ? 'linear-gradient(to left, #121212, rgba(18, 18, 18, 0.6), transparent)'
            : 'linear-gradient(to left, #f8f5f0, rgba(248, 245, 240, 0.6), transparent)'
        }"
      ></div>
    </div>


    <!-- Modal with Dynamic Content -->
    <ServiceModal :isOpen="selected !== null" @close="selected = null">
      <template v-if="selected">
        <h3 
          class="text-2xl font-bold mb-6 text-center"
          :style="{
            color: themeStore.isDarkMode ? '#FF4DC1' : '#D0008E'
          }"
        >{{ selected.title }}</h3>
        <p 
          class="text-center mb-8"
          :style="{
            color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
          }"
        >{{ selected.description }}</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            v-for="(tier, index) in selected.tiers"
            :key="index"
            class="border rounded-lg p-5 shadow text-left hover:shadow-lg transition"
            :style="{
              backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white',
              borderColor: themeStore.isDarkMode ? '#2D3748' : '#E5E7EB'
            }"
          >
            <h4 
              class="text-xl font-bold mb-2"
              :style="{
                color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
              }"
            >{{ tier.name }}</h4>
            <p 
              class="text-sm mb-2"
              :style="{
                color: themeStore.isDarkMode ? '#D1D5DB' : '#4B5563'
              }"
            >{{ tier.headline }}</p>
            <ul class="list-disc pl-5 space-y-1 text-sm"
              :style="{
                color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
              }"
            >
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
      <h2 
        class="text-2xl font-bold mb-4"
        :style="{
          color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
        }"
      >Ready to bring your ideas to life?</h2>
      <p 
        class="mb-6"
        :style="{
          color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
        }"
      >Choose your services and let us build a custom quote tailored to your goals.</p>
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
import { useThemeStore } from '../stores/ThemeStore';

import PricingSection from '@/components/Pricing/PricingSection.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import ServiceModal from '@/components/services/ServiceModal.vue'
import AnimatedButton from '@/components/ui/AnimatedButton.vue'
import BuildYourPackageWizard from '@/components/pricing/wizards/BuildYourPackageWizard.vue'
import { services } from '@/components/services/ServicesData'

const themeStore = useThemeStore();
const selected = ref(null)
const showWizard = ref(false)

const openWizard = () => {
  selected.value = null
  showWizard.value = true
}
</script>

<style scoped>
/* No change needed for bg-beige as we're using inline styles */
</style>