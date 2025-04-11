<template>
  <WizardShell
    title="🟡 Scale-Up Package"
    :price="25000"
    :addons="ScaleUpAddons"
    @close="$emit('close')"
  />
</template>

<script setup lang="ts">
import WizardShell from './WizardShell.vue'

const ScaleUpAddons = [
  { name: 'Extra Web App Module', price: 2500 },
  { name: 'Additional App Feature/Integration', price: 1800 },
  { name: 'Membership System Setup', price: 2200 },
  { name: 'Full Brand Book Creation', price: 1500 },
  { name: 'Advanced Blog + SEO Funnel Setup', price: 1800 },
  { name: 'AI-Driven CRM Automation Setup', price: 2500 },
  { name: 'Custom Analytics Dashboard', price: 2000 },
  { name: 'Executive Strategy Package (6 sessions)', price: 3500 },
  { name: 'Full Video Promo Production (Melbourne)', price: 3000 }
]
</script>

