<template>
  <WizardShell
    title="🟡 Growth Package"
    :price="5000"
    :addons="GrowthAddons"
    @close="$emit('close')"
  />
</template>

<script setup lang="ts">
import WizardShell from './WizardShell.vue'


const GrowthAddons = [
  { label: 'Extra Website Page (Advanced)', price: 250 },
  { label: 'Add 10 More Products', price: 400 },
  { label: 'Extra Brand Asset Pack', price: 300 },
  { label: 'Extra 2 Pages of Copywriting', price: 500 },
  { label: 'Extra 5 Keyword SEO Optimization', price: 600 },
  { label: 'Advanced Email Flow (5 emails)', price: 800 },
  { label: 'Additional Social Media Templates', price: 200 },
  { label: 'Additional Strategy Call (1 hr)', price: 300 },
  { label: 'Full Drone & Video Promo (Melbourne)', price: 600 }
]
</script>