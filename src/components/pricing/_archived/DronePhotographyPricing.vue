// File: DronePhotographyPricing.vue
<template>
  <div v-motion :initial="{ opacity: 0, y: 40 }" :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }" class="py-10">
    <h3 class="text-2xl font-bold text-center mb-6">Drone Photography Packages</h3>
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
    name: 'Basic Shoot',
    features: ['30 mins flight', '10 photos', '1080p video'],
    price: '$300 – $600'
  },
  {
    name: 'Content Package',
    features: ['20 photos + 4K video', 'B-roll edits'],
    price: '$700 – $1,200'
  },
  {
    name: 'Premium Shoot',
    features: ['Full-day shoot', 'Cinematic edits', 'Music licensed'],
    price: '$1,500+'
  }
]
</script>
