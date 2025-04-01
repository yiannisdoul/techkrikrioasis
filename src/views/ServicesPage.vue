<template>
  <section class="py-20 px-4 sm:px-8 lg:px-16 bg-beige min-h-screen">
    <h1 class="text-4xl font-bold text-center mb-12">Our Services & Packages</h1>

    <!-- 5-Tier Main Bundled Packages -->
    <PricingSection class="mb-20" />

    <!-- Individual Services (with Modals) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :icon="service.icon"
        :description="service.description"
        @open="selected = service"
      />
    </div>

    <!-- Modal with Plans -->
    <ServiceModal :isOpen="selected !== null" @close="selected = null">
      <template v-if="selected">
        <h3 class="text-2xl font-bold text-[#D0008E] mb-6">{{ selected.title }}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="(plan, i) in selected.plans"
            :key="i"
            class="border rounded-lg p-4 shadow bg-white"
          >
            <h4 class="text-lg font-semibold mb-2">{{ plan.name }}</h4>
            <p class="text-sm text-gray-600 mb-3">Starting from <strong>{{ plan.price }}</strong></p>
            <ul class="text-sm text-gray-700 list-disc pl-4 space-y-1">
              <li v-for="(feature, j) in plan.features" :key="j">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </template>
    </ServiceModal>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import PricingSection from '@/components/Pricing/PricingSection.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import ServiceModal from '@/components/services/ServiceModal.vue'

import webDevIcon from '@/assets/icons/web-dev.png'
import mobileAppIcon from '@/assets/icons/mobile-app.png'
import ecommerceIcon from '@/assets/icons/ecommerce.png'
import seoIcon from '@/assets/icons/seo.png'
import digitalMarketingIcon from '@/assets/icons/digital_marketing.png'
import dronePhotographyIcon from '@/assets/icons/drone_photography.png'
import graphicDesignIcon from '@/assets/icons/graphic_design.png'
import strategyConsultingIcon from '@/assets/icons/strategy_consulting.png'

const services = [
  {
    title: 'Web Development',
    icon: webDevIcon,
    description: 'Custom websites built with WordPress or code from scratch.',
    plans: [
      { name: 'Basic', price: '$500 – $1,200', features: ['5 pages', 'Contact form'] },
      { name: 'Advanced', price: '$1,500 – $3,000', features: ['10 pages', 'Blog', 'CMS'] },
      { name: 'Premium', price: '$4,000 – $7,000', features: ['Custom UI/UX', 'Animations'] },
    ],
  },
  {
    title: 'Mobile App Development',
    icon: mobileAppIcon,
    description: 'Android & iOS apps built for startups and businesses.',
    plans: [
      { name: 'Starter App', price: '$2,000 – $5,000', features: ['iOS or Android', '3–5 Screens'] },
      { name: 'Growth App', price: '$5,000 – $10,000', features: ['Cross-platform', 'API integration'] },
      { name: 'Pro App', price: '$10,000+', features: ['Backend + CMS', 'App store support'] },
    ],
  },
  {
    title: 'E-Commerce',
    icon: ecommerceIcon,
    description: 'Online stores that convert, on Shopify, WooCommerce, or custom.',
    plans: [
      { name: 'Launch', price: '$1,200 – $2,000', features: ['Shopify/Woo setup', '10 products'] },
      { name: 'Growth Store', price: '$2,500 – $5,000', features: ['30–50 products', 'Upsell funnels'] },
      { name: 'Pro Ecommerce', price: '$6,000 – $12,000', features: ['Advanced filtering', 'Custom features'] },
    ],
  },
  {
    title: 'SEO',
    icon: seoIcon,
    description: 'Rank your website locally and nationally with smart SEO.',
    plans: [
      { name: 'Local SEO', price: '$500 – $1,500', features: ['GMB setup', 'Citations'] },
      { name: 'Growth SEO', price: '$1,500 – $2,500', features: ['On-page + Tech SEO', '4 Blogs/mo'] },
      { name: 'Enterprise SEO', price: '$3,000 – $6,000', features: ['Full audit', 'Link building'] },
    ],
  },
  {
    title: 'Digital Marketing',
    icon: digitalMarketingIcon,
    description: 'We drive traffic with smart Google Ads and Meta campaigns.',
    plans: [
      { name: 'Starter Ads', price: '$600 – $1,500/mo', features: ['Google or Meta', 'Landing page'] },
      { name: 'Growth Campaign', price: '$2,000 – $4,000/mo', features: ['Google + Meta', 'Retargeting'] },
      { name: 'Full Funnel', price: '$5,000 – $10,000/mo', features: ['Video Ads', 'Automation'] },
    ],
  },
  {
    title: 'Drone Photography',
    icon: dronePhotographyIcon,
    description: 'Capture property or events with stunning drone shots.',
    plans: [
      { name: 'Basic Shoot', price: '$300 – $600', features: ['30 mins flight', '10 photos', '1080p video'] },
      { name: 'Content Package', price: '$700 – $1,200', features: ['20 photos + 4K video', 'B-roll edits'] },
      { name: 'Premium Shoot', price: '$1,500+', features: ['Full-day shoot', 'Cinematic edits'] },
    ],
  },
  {
    title: 'Graphic Design',
    icon: graphicDesignIcon,
    description: 'Visuals that speak your brand: logos, kits & more.',
    plans: [
      { name: 'Essentials Pack', price: '$250 – $600', features: ['Logo', 'Business card'] },
      { name: 'Brand Kit', price: '$700 – $1,200', features: ['Logo + colors + fonts', 'Social kit'] },
      { name: 'Visual Identity Pro', price: '$1,500 – $3,000', features: ['Full brand strategy', 'Motion graphics'] },
    ],
  },
  {
    title: 'Strategy & Consulting',
    icon: strategyConsultingIcon,
    description: 'Business & tech consulting with ROI-first mindset.',
    plans: [
      { name: 'Starter Strategy', price: '$300 – $800', features: ['1–2 hour consult', 'Audit + Roadmap'] },
      { name: 'Growth Audit', price: '$1,000 – $2,500', features: ['Full audit', '30-day plan'] },
      { name: 'Ongoing Advisory', price: '$3,000+/mo', features: ['Fractional CMO/CTO', 'Weekly sessions'] },
    ],
  },
]

const selected = ref(null)
</script>

<style scoped>
.bg-beige {
  background-color: #f8f5f0;
}
</style>
