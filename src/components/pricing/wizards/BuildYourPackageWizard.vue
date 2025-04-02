<template>
  <teleport to="body">
    <transition name="fade">
      <div class="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60" @click.self="$emit('close')">
        <transition name="scale">
          <div
            class="bg-white max-w-3xl w-full p-6 rounded-xl shadow-xl relative overflow-y-auto max-h-[90vh]"
            @keydown.esc="$emit('close')"
          >
            <!-- Close Button -->
            <button class="absolute top-4 right-4 text-gray-500 hover:text-black" @click="$emit('close')">✕</button>

            <!-- Header -->
            <h2 class="text-2xl font-bold mb-2">Build Your Package</h2>
            <p class="mb-6 text-gray-600">Select the services you need and choose a tier for each.</p>

            <!-- Step 1: Services -->
            <div class="mb-6">
              <label class="font-semibold mb-2 block">Which services are you interested in?</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  v-for="(service, index) in services"
                  :key="index"
                  class="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input type="checkbox" v-model="selectedServices" :value="service.name" />
                  {{ service.label }}
                </label>
              </div>
            </div>

            <!-- Step 2: Tiers -->
            <div v-for="service in selectedServices" :key="service" class="mb-6 border-t pt-4">
              <label class="block font-semibold mb-2">{{ service }}</label>
              <div class="space-y-2">
                <label
                  v-for="tier in tiers[service]"
                  :key="tier.label"
                  class="block text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    :name="service"
                    v-model="selectedTiers[service]"
                    :value="tier.label"
                    class="mr-2"
                  />
                  <strong>{{ tier.label }}:</strong> {{ tier.description }}
                </label>
              </div>
            </div>

            <!-- Step 3: Contact Form -->
            <div class="space-y-4 border-t pt-6">
              <input type="text" v-model="form.name" placeholder="Full Name" class="w-full border p-2 rounded" />
              <input type="text" v-model="form.business" placeholder="Business Name" class="w-full border p-2 rounded" />
              <input type="email" v-model="form.email" placeholder="Email Address" class="w-full border p-2 rounded" />
              <input type="text" v-model="form.location" placeholder="Location (City + Country)" class="w-full border p-2 rounded" />
              <select v-model="form.budget" class="w-full border p-2 rounded">
                <option disabled value="">Select Budget Range</option>
                <option>$2,500 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000+</option>
              </select>
              <textarea
                v-model="form.notes"
                placeholder="Anything else you'd like us to know?"
                class="w-full border p-2 rounded"
              />
            </div>

            <!-- Submit -->
            <div class="mt-6 text-right">
              <button
                @click="submitForm"
                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded"
              >
                Submit Quote Request
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { reactive, ref } from 'vue'

const services = [
  { name: 'Web Development', label: '🌐 Web Development' },
  { name: 'Mobile App Development', label: '📱 Mobile App Development' },
  { name: 'E-Commerce', label: '🛒 E-Commerce' },
  { name: 'SEO', label: '🔍 SEO' },
  { name: 'Digital Marketing', label: '📣 Digital Marketing' },
  { name: 'Branding & Graphic Design', label: '🎨 Branding & Graphic Design' },
  { name: 'Strategy & Consulting', label: '💼 Strategy & Consulting' },
  { name: 'Drone Photography', label: '📸 Drone Photography (Melbourne only)' },
]

const tiers = {
  'Web Development': [
    { label: 'Essential', description: '3–5 pages, theme-based' },
    { label: 'Enhanced', description: '6–8 pages, SEO-ready' },
    { label: 'Elite', description: '10+ pages, custom + CRM-ready' },
  ],
  'Mobile App Development': [
    { label: 'Essential', description: '3–5 screens, simple functionality' },
    { label: 'Enhanced', description: 'Cross-platform, login, data features' },
    { label: 'Elite', description: 'Admin dashboard, scalable architecture' },
  ],
  'E-Commerce': [
    { label: 'Essential', description: 'Up to 15 products, standard checkout' },
    { label: 'Enhanced', description: '50+ products, email flows, funnels' },
    { label: 'Elite', description: 'Subscriptions, POS/API integrations' },
  ],
  'SEO': [
    { label: 'Essential', description: '3–5 keywords, basic audit' },
    { label: 'Enhanced', description: '10+ keywords, backlinks, Google Ads' },
    { label: 'Elite', description: 'Full funnel, paid ads, CRO & consulting' },
  ],
  'Digital Marketing': [
    { label: 'Essential', description: 'Email templates, 1 campaign setup' },
    { label: 'Enhanced', description: 'Ad campaign + content schedule' },
    { label: 'Elite', description: 'Automated funnels, monthly reporting' },
  ],
  'Branding & Graphic Design': [
    { label: 'Essential', description: 'Logo, favicon, brand colors' },
    { label: 'Enhanced', description: 'Social kit, slide decks' },
    { label: 'Elite', description: 'Full brand book + media assets' },
  ],
  'Strategy & Consulting': [
    { label: 'Essential', description: '1 x 60-min Zoom session' },
    { label: 'Enhanced', description: 'Business model + 1-week advisory' },
    { label: 'Elite', description: '1-month consulting block' },
  ],
  'Drone Photography': [
    { label: 'Essential', description: '30 min shoot + 5 photos + short clip' },
    { label: 'Enhanced', description: 'Multi-location + edited promo' },
    { label: 'Elite', description: 'Full shoot + 4K branded video' },
  ],
}

const selectedServices = ref([])
const selectedTiers = reactive({})
const form = reactive({
  name: '',
  business: '',
  email: '',
  location: '',
  budget: '',
  notes: '',
})

const submitForm = () => {
  console.log('Quote submitted:', {
    services: selectedServices.value,
    tiers: selectedTiers,
    details: form,
  })
  alert('Your quote request has been submitted!')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.25s ease;
}
.scale-enter-from {
  transform: scale(0.95);
}
.scale-leave-to {
  transform: scale(0.95);
}
</style>
