<template>
  <teleport to="body">
    <transition name="fade">
      <div class="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60" @click.self="$emit('close')">
        <transition name="scale">
          <div class="bg-white max-w-3xl w-full p-6 rounded-xl shadow-xl relative overflow-y-auto max-h-[90vh]" @keydown.esc="$emit('close')">

            <button class="absolute top-4 right-4 text-gray-500 hover:text-black" @click="$emit('close')">✕</button>

            <!-- Step 1: Fill Form -->
            <div v-if="step === 1">
              <h2 class="text-2xl font-bold mb-2">Build Your Package</h2>
              <p class="mb-6 text-gray-600">Select the services you need and choose a tier for each.</p>

              <!-- Services -->
              <div class="mb-6">
                <label class="font-semibold mb-2 block">Which services are you interested in?</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label v-for="(service, index) in services" :key="index" class="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" v-model="selectedServices" :value="service.name" />
                    {{ service.label }}
                  </label>
                </div>
              </div>

              <!-- Tiers -->
              <div v-for="service in selectedServices" :key="service" class="mb-6 border-t pt-4">
                <label class="block font-semibold mb-2">{{ service }}</label>
                <div class="space-y-2">
                  <label v-for="tier in tiers[service as keyof typeof tiers]" :key="tier.label" class="block text-sm text-gray-700">
                    <input type="radio" :name="service" v-model="selectedTiers[service]" :value="tier.label" class="mr-2" />
                    <strong>{{ tier.label }}:</strong> {{ tier.description }}
                  </label>
                </div>
              </div>

              <!-- Contact Form -->
              <div class="space-y-4 border-t pt-6">
                <input v-model="form.name" type="text" placeholder="Full Name" class="w-full border p-2 rounded" />
                <input v-model="form.business" type="text" placeholder="Business Name" class="w-full border p-2 rounded" />

                <select v-model="form.country" @change="updatePhoneMask" class="w-full border p-2 rounded">
                  <option disabled value="">Select Country</option>
                  <option v-for="(code, name) in countryList" :key="code" :value="name">{{ name }}</option>
                </select>

                <input v-model="form.city" type="text" placeholder="City" class="w-full border p-2 rounded" />

                <div class="flex gap-2">
                  <select v-model="form.phoneCode" class="border p-2 rounded w-1/3">
                    <option v-for="(code, name) in countryCallingCodes" :key="name" :value="code">+{{ code }}</option>
                  </select>
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="border p-2 rounded w-2/3"
                    placeholder="Phone Number"
                    :maxlength="maxLength"
                    @input="form.phone = form.phone.replace(/\D/g, '')"
                  />
                </div>

                <input v-model="form.email" type="email" placeholder="Email Address" class="w-full border p-2 rounded" />

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

                <textarea v-model="form.notes" placeholder="Anything else you'd like us to know?" class="w-full border p-2 rounded" />
              </div>

              <div class="mt-6 text-right">
                <button @click="submitForm" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
                  Submit
                </button>
              </div>
            </div>

            <!-- Step 2: Confirmation Screen -->
            <div v-else class="text-center p-8">
              <h2 class="text-2xl font-bold mb-4">🎉 You're Almost Done!</h2>
              <p class="text-gray-600 mb-6">We'll contact you with a custom proposal based on your selections.</p>

              <ul class="text-left text-sm text-gray-700 space-y-2 mb-6">
                <li><strong>Full Name:</strong> {{ form.name }}</li>
                <li><strong>Business Name:</strong> {{ form.business }}</li>
                <li><strong>Phone:</strong> +{{ form.phoneCode }} {{ form.phone }}</li>
                <li><strong>Email:</strong> {{ form.email }}</li>
                <li><strong>Location:</strong> {{ form.city }}, {{ form.country }}</li>
                <li><strong>Budget:</strong> {{ form.budget }}</li>
                <li><strong>Services:</strong> {{ selectedServices.join(', ') || 'None' }}</li>
                <li><strong>Notes:</strong> {{ form.notes || 'None' }}</li>
              </ul>

              <button @click="finalSubmit" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                Finish & Submit
              </button>
            </div>

          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import axios from 'axios'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { countries } from 'countries-list'

const emit = defineEmits(['close'])

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const step = ref(1)

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
  phoneCode: '61',
  email: '',
  country: 'Australia',
  city: '',
  budget: '',
  notes: '',
})

const countryList = computed(() => {
  return Object.entries(countries).reduce((acc, [code, value]) => {
    acc[value.name] = code
    return acc
  }, {} as Record<string, string>)
})

const countryCallingCodes = computed(() => {
  return Object.entries(countries).reduce((acc, [_, c]) => {
    acc[c.name] = Array.isArray(c.phone) ? c.phone[0].toString() : '1'
    return acc
  }, {} as Record<string, string>)
})

const maxLength = computed(() => {
  const code = form.phoneCode
  return ['61', '1'].includes(code) ? 10 : 12
})

function updatePhoneMask() {
  form.phone = ''
  form.phoneCode = countryCallingCodes.value[form.country] || '1'
}

function validateForm() {
  if (!form.name || !form.phone || !form.email || !form.country || !form.city) {
    alert('Please complete all required fields.')
    return false
  }
  return true
}

async function submitForm() {
  if (!validateForm()) return
  step.value = 2
}

async function finalSubmit() {
  try {
    const docRef = await addDoc(collection(db, 'customQuotes'), {
      services: selectedServices.value,
      tiers: selectedTiers,
      details: {
        ...form,
        phone: `+${form.phoneCode} ${form.phone}`,
        location: `${form.city}, ${form.country}`,
      },
      createdAt: new Date(),
    })
    console.log('🔥 Firebase saved with ID:', docRef.id)

    const emailRes = await sendEmail()
    console.log('📧 Email response:', emailRes.data)

    alert('✅ Thank you! Your quote request has been submitted successfully.')
    emit('close')

  } catch (error) {
    console.error('❌ Error submitting form or sending email:', error)
    alert('❌ There was a problem submitting your form.')
  }
}

async function sendEmail() {
  return axios.post(
    'https://api.brevo.com/v3/smtp/email',
    {
      sender: {
        name: 'Tech Kri Kri Oasis',
        email: 'hello@techkrikrioasis.com.au',
      },
      to: [
        {
          email: form.email,
          name: form.name,
        }
      ],
      bcc: [
        {
          email: "hello@techkrikrioasis.com.au",
          name: "TK²O Notifications",
        }
      ]
      ,
      templateId: 2,
      params: {
        fullName: form.name,
        businessName: form.business,
        phone: `+${form.phoneCode} ${form.phone}`,
        email: form.email,
        location: `${form.city}, ${form.country}`,
        services: selectedServices.value.join(', '),
        budgetRange: form.budget,
        additionalInfo: form.notes,
      },
    },
    {
      headers: {
        accept: 'application/json',
        'api-key': import.meta.env.VITE_BREVO_API_KEY,
        'content-type': 'application/json',
      },
    }
  )
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.scale-enter-active, .scale-leave-active {
  transition: transform 0.25s ease;
}
.scale-enter-from {
  transform: scale(0.95);
}
.scale-leave-to {
  transform: scale(0.95);
}
</style>
