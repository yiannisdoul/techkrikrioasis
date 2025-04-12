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
                v-for="tier in tiers[service as keyof typeof tiers]"
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
              <input type="tel" v-model="form.phone" placeholder="Phone Number" class="w-full border p-2 rounded" />
              <input type="email" v-model="form.email" placeholder="Email Address" class="w-full border p-2 rounded" />
              <input type="text" v-model="form.location" placeholder="Location (City + Country)" class="w-full border p-2 rounded" />
              <select v-model="form.budget" class="w-full border p-2 rounded">
                <option disabled value="">Select Budget Range</option>
                <option>Under $1,000</option>
                <option>$1,000 – $2,500</option>
                <option>$2,500 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000 – $50,000</option>
                <option>$50,000+</option>
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

<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Initialize Firebase (only for saving leads)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Form setup
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
    { label: 'Essential', description: '5-page WordPress site (theme-based, mobile responsive)' },
    { label: 'Enhanced', description: '8-page professionally designed WordPress site (SEO-ready, blog-ready)' },
    { label: 'Elite', description: '10+ page fully custom website (design, copywriting, CRM integration)' },
  ],
  'Mobile App Development': [
    { label: 'Essential', description: 'Hybrid app (up to 5 screens, simple features)' },
    { label: 'Enhanced', description: 'Cross-platform app (login, user data, notifications)' },
    { label: 'Elite', description: 'Full app + admin dashboard (scalable, secure, API-ready)' },
  ],
  'E-Commerce': [
    { label: 'Essential', description: 'Online store (up to 20 products, standard checkout)' },
    { label: 'Enhanced', description: 'Full catalog (50+ products, abandoned cart recovery, funnels)' },
    { label: 'Elite', description: 'Enterprise e-commerce (subscriptions, POS systems, API integrations)' },
  ],
  'SEO': [
    { label: 'Essential', description: 'SEO setup (5 keywords, on-page optimization)' },
    { label: 'Enhanced', description: 'Advanced SEO (10+ keywords, Google Ads, backlinks)' },
    { label: 'Elite', description: 'Full SEO funnel (paid ads, CRO, lead conversion strategy)' },
  ],
  'Digital Marketing': [
    { label: 'Essential', description: 'Email templates + 1 automated campaign' },
    { label: 'Enhanced', description: 'Ad campaign setup + monthly content calendar' },
    { label: 'Elite', description: 'Full marketing funnel (automation, reporting dashboard)' },
  ],
  'Branding & Graphic Design': [
    { label: 'Essential', description: 'Logo, brand colors, social banners' },
    { label: 'Enhanced', description: 'Full branding kit (logo, social templates, slide decks)' },
    { label: 'Elite', description: 'Complete brand system (logo, brand book, media assets)' },
  ],
  'Strategy & Consulting': [
    { label: 'Essential', description: '1 x 60-min strategy Zoom session' },
    { label: 'Enhanced', description: 'Business model advisory (1-week support)' },
    { label: 'Elite', description: 'Full month consulting block (weekly sessions + business review)' },
  ],
  'Drone Photography': [
    { label: 'Essential', description: '30-min drone shoot (5 photos + short 4K video)' },
    { label: 'Enhanced', description: 'Multi-location drone shoot (edited promo reel)' },
    { label: 'Elite', description: 'Full branded shoot (full-day, cinematic editing, 4K production)' },
  ],
}

const selectedServices = ref<string[]>([])
const selectedTiers = reactive<Record<string, string>>({})
const form = reactive({
  name: '',
  business: '',
  phone: '',
  email: '',
  location: '',
  budget: '',
  notes: '',
})

// Send Email to Client
async function sendEmail() {
  try {
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: "Tech Kri Kri Oasis",
          email: "hello@techkrikrioasis.com.au", // ✅ Sender
        },
        to: [
          {
            email: form.email,
            name: form.name,
          }
        ],
        templateId: 2, // ✅ Build Your Package Template ID (#2)
        params: {
          fullName: form.name,
          businessName: form.business,
          phone: form.phone,
          email: form.email,
          location: form.location,
          services: selectedServices.value.join(', '),
          budgetRange: form.budget,
          additionalInfo: form.notes,
        },
      },
      {
        headers: {
          'accept': 'application/json',
          'api-key': import.meta.env.VITE_BREVO_API_KEY, // ✅ API Key
          'content-type': 'application/json',
        },
      }
    )
    console.log('Email sent successfully.')
  } catch (error) {
    console.error('Error sending email:', error)
    alert('There was a problem sending the confirmation email.')
  }
}

// Main Submit Form
async function submitForm() {
  try {
    await addDoc(collection(db, "customQuotes"), {
      services: selectedServices.value,
      tiers: selectedTiers,
      details: { ...form },
      createdAt: new Date(),
    })

    await sendEmail()

    alert('Your quote request has been submitted successfully!')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was a problem submitting your form.')
  }
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
