<template>
  <teleport to="body">
    <transition name="fade">
      <div class="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60" @click.self="$emit('close')">
        <transition name="scale">
          <div class="bg-white max-w-3xl w-full p-6 rounded-xl shadow-xl relative overflow-y-auto max-h-[90vh]" @keydown.esc="$emit('close')">
            <button class="absolute top-4 right-4 text-gray-500 hover:text-black" @click="$emit('close')">✕</button>

            <!-- Step 1 -->
            <div v-if="step === 1">
              <h2 class="text-2xl font-bold mb-2 text-center">{{ title }}</h2>
              <p class="text-center mb-6 text-gray-600">
                Customize your package by selecting add-ons and filling out your details.
              </p>

              <form @submit.prevent="nextStep" class="space-y-6">

                <!-- Add-ons -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-3">Add-ons</h3>
                  <div v-for="(addon, i) in props.addons" :key="i" class="flex items-center justify-between mb-3">
                    <div>
                      <p class="font-medium">{{ addon.label }} <span class="text-gray-400">(+${{ addon.price }})</span></p>
                    </div>
                    <select v-model.number="addonQuantities[addon.label]" class="select-quantity">
                      <option v-for="n in 6" :key="n-1" :value="n-1">{{ n-1 }}</option>
                    </select>
                  </div>
                </div>

                <!-- Contact Fields -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input v-model="form.fullName" type="text" placeholder="Full Name" class="input" required />
                  <input v-model="form.businessName" type="text" placeholder="Business Name" class="input" />

                  <!-- Country Dropdown -->
                  <select v-model="form.country" @change="updatePhoneMask" class="input" required>
                    <option disabled value="">Select Country</option>
                    <option v-for="(code, name) in countryList" :key="code" :value="name">{{ name }}</option>
                  </select>

                  <!-- City Manual Input -->
                  <input v-model="form.city" type="text" placeholder="City" class="input" required />

                  <!-- Phone -->
                  <div class="flex gap-2">
                    <select v-model="form.phoneCode" class="input w-1/3">
                      <option v-for="(code, name) in countryCallingCodes" :key="name" :value="code">+{{ code }}</option>
                    </select>
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="input w-2/3"
                      placeholder="Phone Number"
                      required
                      :maxlength="maxLength"
                      @input="form.phone = form.phone.replace(/\D/g, '')"
                    />
                  </div>

                  <input v-model="form.email" type="email" placeholder="Email Address" class="input sm:col-span-2" required />
                </div>

                <!-- Total -->
                <div class="mt-4 text-center">
                  <p class="text-xl font-bold text-orange-500">
                    Estimated Total: ${{ estimatedTotal }}
                  </p>
                </div>

                <button type="submit" class="w-full mt-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg">
                  Next
                </button>
              </form>
            </div>

            <!-- Step 2 -->
            <div v-else>
              <h3 class="text-xl font-bold mb-4">You're Almost Done!</h3>
              <p class="text-sm text-gray-600 mb-4">We'll contact you with a custom proposal based on your selections.</p>

              <ul class="text-sm text-gray-700 space-y-2 mb-6">
                <li><strong>Package:</strong> {{ title }}</li>
                <li><strong>Full Name:</strong> {{ form.fullName }}</li>
                <li><strong>Business Name:</strong> {{ form.businessName }}</li>
                <li><strong>Phone:</strong> +{{ form.phoneCode }} {{ form.phone }}</li>
                <li><strong>Email:</strong> {{ form.email }}</li>
                <li><strong>Location:</strong> {{ form.city }}, {{ form.country }}</li>
                <li><strong>Add-ons:</strong> {{ finalSelectedAddons.length ? finalSelectedAddons.map(a => a.nameWithQuantity).join(', ') : 'None' }}</li>
                <li><strong>Total:</strong> ${{ estimatedTotal }}</li>
              </ul>

              <button class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg" @click="submitForm">
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
import { ref, computed } from 'vue'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { countries } from 'countries-list'
import axios from 'axios'

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

interface Addon {
  label: string
  price: number
}

const props = defineProps<{ title: string; price: number; addons: Addon[] }>()
const emit = defineEmits(['close'])

const step = ref(1)

const form = ref({
  fullName: '',
  businessName: '',
  phone: '',
  phoneCode: '61',
  email: '',
  country: 'Australia',
  city: '',
})

const addonQuantities = ref<Record<string, number>>({})
props.addons.forEach(addon => {
  addonQuantities.value[addon.label] = 0
})

const finalSelectedAddons = computed(() =>
  props.addons
    .filter(addon => addonQuantities.value[addon.label] > 0)
    .map(addon => ({
      label: addon.label,
      quantity: addonQuantities.value[addon.label],
      price: addon.price,
      nameWithQuantity: `${addon.label} (x${addonQuantities.value[addon.label]})`,
    }))
)

const estimatedTotal = computed(() =>
  props.price + finalSelectedAddons.value.reduce((sum, a) => sum + a.price * a.quantity, 0)
)

const maxLength = computed(() => {
  const code = form.value.phoneCode
  return ['61', '1'].includes(code) ? 10 : 12
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

function updatePhoneMask() {
  form.value.phone = ''
  form.value.phoneCode = countryCallingCodes.value[form.value.country] || '1'
}

function nextStep() {
  if (!form.value.fullName || !form.value.phone || !form.value.email || !form.value.country || !form.value.city) {
    alert('Please complete all required fields.')
    return
  }
  step.value = 2
}

async function submitForm() {
  try {
    const fullPhone = `+${form.value.phoneCode} ${form.value.phone}`
    const fullLocation = `${form.value.city}, ${form.value.country}`

    await addDoc(collection(db, 'leads'), {
      package: props.title,
      ...form.value,
      phone: fullPhone,
      location: fullLocation,
      addons: finalSelectedAddons.value,
      estimatedTotal: estimatedTotal.value,
      createdAt: new Date(),
    })

    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: 'Tech Kri Kri Oasis',
          email: 'hello@techkrikrioasis.com.au',
        },
        to: [
          { email: form.value.email, name: form.value.fullName }
        ],
        bcc: [
          { email: 'hello@techkrikrioasis.com.au', name: 'TK²O Notifications' }
        ],
        templateId: 2,
        params: {
          fullName: form.value.fullName,
          businessName: form.value.businessName,
          phone: fullPhone,
          email: form.value.email,
          location: fullLocation,
          budgetRange: `$${props.price.toLocaleString()}`,
          services: props.title,
          additionalInfo: finalSelectedAddons.value.map(a => a.nameWithQuantity).join(', ') || 'None',
        },
      },
      {
        headers: {
          'accept': 'application/json',
          'api-key': import.meta.env.VITE_BREVO_API_KEY,
          'content-type': 'application/json',
        },
      }
    )

    alert('✅ Thank you! Your request has been submitted.')
    emit('close')
  } catch (error) {
    console.error(error)
    alert('❌ There was a problem submitting your form. Please try again.')
  }
}
</script>