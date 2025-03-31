<template>
  <div class="pt-24 px-6 md:px-12 lg:px-20">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-[var(--primary-color)] mb-6">Our Services</h1>
    <p class="text-gray-700 max-w-3xl mb-10">
      We provide a wide range of services tailored to help your business grow, scale, and thrive online:
    </p>

    <!-- 🌟 Pricing Grid (4 main packages) -->
    <PricingGrid class="mb-16" />

    <!-- 🧩 Service Categories (Accordion) -->
    <div v-for="(category, index) in serviceCategories" :key="index" class="mb-8">
      <details class="bg-[#FDF8F3] p-6 rounded-lg shadow-sm transition-all" data-aos="fade-up">
        <summary class="text-lg font-semibold cursor-pointer text-[#D0008E]">
          {{ category.title }}
        </summary>
        <div class="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="(pkg, idx) in category.packages"
            :key="idx"
            class="bg-white rounded-lg p-4 border hover:shadow-md transition card-hover"
          >
            <h4 class="text-md font-bold text-[#E85D04] mb-2">{{ pkg.name }}</h4>
            <ul class="text-sm text-gray-600 list-disc pl-4">
              <li v-for="(item, i) in pkg.features" :key="i">{{ item }}</li>
            </ul>
            <p class="mt-2 text-xs text-gray-500">💸 {{ pkg.price }}</p>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingGrid from '../components/PricingGrid.vue';

const serviceCategories = [
  {
    title: 'Web Development',
    packages: [
      { name: 'Basic', features: ['5 pages', 'Contact form'], price: '$500 – $1,200' },
      { name: 'Advanced', features: ['10 pages', 'Blog', 'CMS'], price: '$1,500 – $3,000' },
      { name: 'Premium', features: ['Custom UI/UX', 'Animations'], price: '$4,000 – $7,000' },
    ],
  },
  {
    title: 'Mobile App Development',
    packages: [
      { name: 'Starter App', features: ['iOS or Android'], price: '$2,000 – $5,000' },
      { name: 'Growth App', features: ['Cross-platform', 'API'], price: '$5,000 – $10,000' },
      { name: 'Pro App', features: ['Custom backend', 'App store support'], price: '$10,000+' },
    ],
  },
  {
    title: 'SEO',
    packages: [
      { name: 'Local SEO', features: ['GMB setup', 'Citations'], price: '$500 – $1,500' },
      { name: 'Growth SEO', features: ['On-page + Off-page'], price: '$2,000 – $4,000' },
      { name: 'Enterprise SEO', features: ['Content + Backlinks'], price: '$5,000+' },
    ],
  },
  {
    title: 'E-Commerce',
    packages: [
      { name: 'Launch', features: ['Shopify or WooCommerce'], price: '$800 – $2,000' },
      { name: 'Growth Store', features: ['Product setup', 'Payment integration'], price: '$3,000 – $6,000' },
      { name: 'Pro Ecommerce', features: ['Custom UX', 'Sales funnel'], price: '$7,000+' },
    ],
  },
  {
    title: 'Digital Marketing',
    packages: [
      { name: 'Starter Ads', features: ['1 campaign', 'Google or Meta'], price: '$500 – $1,000' },
      { name: 'Growth Campaign', features: ['2+ platforms', 'Ad creatives'], price: '$1,500 – $3,000' },
      { name: 'Full Funnel', features: ['Retargeting + Analytics'], price: '$4,000+' },
    ],
  },
  {
    title: 'Drone Photography',
    packages: [
      { name: 'Basic', features: ['1-hour shoot'], price: '$200 – $400' },
      { name: 'Content', features: ['Photo + Video'], price: '$500 – $900' },
      { name: 'Premium', features: ['Full-day + Editing'], price: '$1,000+' },
    ],
  },
  {
    title: 'Graphic Design',
    packages: [
      { name: 'Essentials', features: ['Logo + Social banners'], price: '$300 – $700' },
      { name: 'Brand Kit', features: ['Fonts, colors, guidelines'], price: '$800 – $1,500' },
      { name: 'Visual Identity', features: ['Custom branding system'], price: '$2,000+' },
    ],
  },
  {
    title: 'Strategy & Consulting',
    packages: [
      { name: 'Starter', features: ['1-hour strategy call'], price: '$150 – $300' },
      { name: 'Growth Audit', features: ['Full website + marketing audit'], price: '$500 – $1,000' },
      { name: 'Advisory', features: ['Ongoing CXO-level support'], price: '$2,000+' },
    ],
  },
];
</script>
