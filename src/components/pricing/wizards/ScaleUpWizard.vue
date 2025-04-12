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
  { label: 'Extra Web App Module', price: 2500 },
  { label: 'Additional App Feature/Integration', price: 1800 },
  { label: 'Membership System Setup', price: 2200 },
  { label: 'Full Brand Book Creation', price: 1500 },
  { label: 'Advanced Blog + SEO Funnel Setup', price: 1800 },
  { label: 'AI-Driven CRM Automation Setup', price: 2500 },
  { label: 'Custom Analytics Dashboard', price: 2000 },
  { label: 'Executive Strategy Package (6 sessions)', price: 3500 },
  { label: 'Full Video Promo Production (Melbourne)', price: 3000 }
]
</script>

