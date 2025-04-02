<!-- File: QuoteWizard.vue -->
<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
    <div class="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-xl relative">
      <button class="absolute top-3 right-4 text-gray-600 hover:text-red-500" @click="$emit('close')">✕</button>

      <div v-if="step === 1">
        <h3 class="text-2xl font-bold mb-4">Customize Your {{ basePackage.title }} Package</h3>
        <p class="text-gray-600 text-sm mb-4">Base Price: ${{ basePackage.price }}</p>

        <label class="block mb-2 font-medium">Add-ons:</label>
        <div class="space-y-2">
          <div v-for="(addon, i) in addons" :key="i" class="flex items-center justify-between">
            <label>
              <input type="checkbox" v-model="selectedAddons" :value="addon" class="mr-2">
              {{ addon.label }}
            </label>
            <span class="text-sm text-gray-500">+${{ addon.price }}</span>
          </div>
        </div>

        <label class="block mt-6 font-medium">Email (for proposal):</label>
        <input
          type="email"
          v-model="email"
          @input="playKeystroke"
          placeholder="you@example.com"
          class="border rounded px-3 py-2 w-full mt-1"
        />

        <div class="flex justify-between items-center mt-6">
          <p class="text-sm font-semibold">Estimated Total: ${{ totalPrice }}</p>
          <button
            class="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
            @click="step = 2"
          >Next</button>
        </div>
      </div>

      <div v-else-if="step === 2">
        <h3 class="text-xl font-bold mb-4">You're Almost Done!</h3>
        <p class="text-sm text-gray-600 mb-4">We’ll contact you shortly with a personalized proposal.</p>

        <ul class="text-left text-sm text-gray-700 mb-4">
          <li><strong>Package:</strong> {{ basePackage.title }}</li>
          <li><strong>Add-ons:</strong> {{ selectedAddons.map(a => a.label).join(', ') || 'None' }}</li>
          <li><strong>Total:</strong> ${{ totalPrice }}</li>
          <li><strong>Email:</strong> {{ email }}</li>
        </ul>

        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          @click="$emit('close')"
        >Finish & Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  basePackage: Object
})

const step = ref(1)
const email = ref('')
const selectedAddons = ref([])
const audio = new Audio('/assets/sounds/keystroke.mp3')

const addons = [
  { label: 'Mobile Optimization', price: 1500 },
  { label: 'Hosting + VPS Setup', price: 900 },
  { label: 'Advanced SEO Suite', price: 1200 },
  { label: '1-Month Maintenance', price: 600 }
]

const totalPrice = computed(() => {
  return basePackage.price + selectedAddons.value.reduce((sum, a) => sum + a.price, 0)
})

function playKeystroke() {
  audio.currentTime = 0
  audio.play()
}
</script>

<style scoped>
input[type="checkbox"]:checked {
  accent-color: #f59e0b;
}
</style>
