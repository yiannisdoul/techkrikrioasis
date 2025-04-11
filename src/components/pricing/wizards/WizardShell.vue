<template>
  <teleport to="body">
    <transition name="fade">
      <div class="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60" @click.self="$emit('close')">
        <transition name="scale">
          <div class="bg-white max-w-3xl w-full p-6 rounded-xl shadow-xl relative overflow-y-auto max-h-[90vh]" @keydown.esc="$emit('close')">
            <button class="absolute top-4 right-4 text-gray-500 hover:text-black" @click="$emit('close')">✕</button>

            <!-- Step 1: Form -->
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
                    <select v-model.number="addonQuantities[addon.label]" class="input">
                      <option v-for="n in 6" :key="n-1" :value="n-1">{{ n-1 }}</option>
                    </select>
                  </div>
                </div>

                <!-- Contact Fields -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input v-model="form.fullName" type="text" placeholder="Full Name" class="input" required />
                  <input v-model="form.businessName" type="text" placeholder="Business Name" class="input" />
                  <input v-model="form.location" type="text" placeholder="City + Country" class="input" required />
                  <input v-model="form.phone" type="tel" placeholder="Phone Number" class="input" required />
                  <input v-model="form.email" type="email" placeholder="Email Address" class="input" required />
                </div>

                <!-- Estimated Total -->
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

            <!-- Step 2: Review -->
            <div v-else>
              <h3 class="text-xl font-bold mb-4">You're Almost Done!</h3>
              <p class="text-sm text-gray-600 mb-4">We'll contact you with a custom proposal based on your selections.</p>

              <ul class="text-sm text-gray-700 space-y-2 mb-6">
                <li><strong>Package:</strong> {{ title }}</li>
                <li><strong>Full Name:</strong> {{ form.fullName }}</li>
                <li><strong>Business Name:</strong> {{ form.businessName }}</li>
                <li><strong>Phone Number:</strong> {{ form.phone }}</li>
                <li><strong>Email:</strong> {{ form.email }}</li>
                <li><strong>Location:</strong> {{ form.location }}</li>
                <li><strong>Add-ons:</strong> {{ finalSelectedAddons.length ? finalSelectedAddons.map(a => a.nameWithQuantity).join(', ') : 'None' }}</li>
                <li><strong>Total:</strong> ${{ estimatedTotal }}</li>
              </ul>

              <button class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg" @click="$emit('close')">
                Finish & Close
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

interface Addon {
  label: string
  price: number
}

const props = defineProps<{
  title: string
  price: number
  addons: Addon[]
}>()

defineEmits(['close'])

const step = ref(1)

const form = ref({
  fullName: '',
  businessName: '',
  location: '',
  phone: '',
  email: ''
})

const addonQuantities = ref<Record<string, number>>({})

props.addons.forEach(addon => {
  addonQuantities.value[addon.label] = 0
})

const finalSelectedAddons = computed(() => {
  return props.addons
    .filter(addon => addonQuantities.value[addon.label] > 0)
    .map(addon => ({
      label: addon.label,
      quantity: addonQuantities.value[addon.label],
      price: addon.price,
      nameWithQuantity: `${addon.label} (x${addonQuantities.value[addon.label]})`
    }))
})

const estimatedTotal = computed(() => {
  const addonsTotal = finalSelectedAddons.value.reduce(
    (sum, addon) => sum + (addon.price * addon.quantity),
    0
  )
  return props.price + addonsTotal
})

function nextStep() {
  if (!form.value.fullName || !form.value.phone || !form.value.email || !form.value.location) {
    alert('Please complete all required fields.')
    return
  }
  step.value = 2
}
</script>

<style scoped lang="css">
.input {
  width: 100%;
  border: 1px solid #d1d5db; /* or another Tailwind-like color */
  border-radius: 0.375rem; /* rounded-md */
  padding-left: 0.75rem; /* px-3 */
  padding-right: 0.75rem;
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem;
}
</style>
