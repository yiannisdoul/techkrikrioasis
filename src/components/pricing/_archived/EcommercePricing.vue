// File: EcommercePricing.vue
<template>
  <div v-motion :initial="{ opacity: 0, y: 40 }" :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }" class="py-10">
    <h3 class="text-2xl font-bold text-center mb-6">Ecommerce Packages</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(pkg, index) in packages" :key="index" class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
        <h4 class="text-xl font-semibold mb-2">{{ pkg.name }}</h4>
        <p class="text-gray-500 text-sm mb-3">Starting from <strong>{{ pkg.price }}</strong></p>
        <ul class="text-sm text-left mb-4 space-y-1">
          <li v-for="(feature, i) in pkg.features" :key="i">🔹 {{ feature }}</li>
        </ul>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Select</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const packages = [
  {
    name: 'Launch',
    features: ['Shopify/Woo setup', '10 products'],
    price: '$1,200 – $2,000'
  },
  {
    name: 'Growth Store',
    features: ['30–50 products', 'Upsell funnels'],
    price: '$2,500 – $5,000'
  },
  {
    name: 'Pro Ecommerce',
    features: ['Advanced filtering', 'Custom features'],
    price: '$6,000 – $12,000'
  }
]
</script>
