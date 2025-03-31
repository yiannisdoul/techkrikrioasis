<template>
    <section class="w-full">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">Our Bundled Packages</h2>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(pkg, index) in packages"
          :key="index"
          class="bg-white rounded-lg shadow-md p-6 text-center transition hover:scale-105 hover:shadow-lg card-hover"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <h3 class="text-xl font-bold text-[#D0008E] mb-2">{{ pkg.title }}</h3>
          <p class="text-sm text-gray-500 mb-4 italic">{{ pkg.price }}</p>
          <ul class="text-left text-sm text-gray-700 mb-4 space-y-1 list-disc list-inside">
            <li v-for="(item, i) in pkg.features" :key="i">{{ item }}</li>
          </ul>
          <button class="mt-2 text-sm font-semibold text-white bg-[#E85D04] hover:bg-[#D0008E] transition px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const packages = [
    {
      title: 'Starter',
      price: '$500 – $1,500',
      features: [
        'Basic website (5 pages)',
        'Logo & branding kit',
        'SEO setup (1-time)',
        'Social setup (3 platforms)',
      ],
    },
    {
      title: 'Growth',
      price: '$2,000 – $7,000',
      features: [
        'Advanced website or eCommerce',
        'Local SEO & GMB',
        '1 Month of SMM',
        'Content strategy',
        'Drone shoot included',
      ],
    },
    {
      title: 'Pro',
      price: '$8,000 – $20,000',
      features: [
        'Custom dev or mobile app',
        'SEO + PPC + SMM',
        'Automation/email',
        'Full branding + videos',
      ],
    },
    {
      title: 'Enterprise',
      price: '$25,000 – $50,000+',
      features: [
        'SaaS, Marketplace or Enterprise app',
        'Full-stack marketing',
        'Dedicated support team',
        'Ongoing strategy',
      ],
    },
  ];
  </script>
  