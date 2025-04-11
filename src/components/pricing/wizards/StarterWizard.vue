<template>
  <WizardShell
    title="🟡 Starter Package"
    :price="2500"
    :addons="StarterAddons"
    @close="$emit('close')"
  />
</template>

<script setup lang="ts">
import WizardShell from './WizardShell.vue'

const StarterAddons = [
  { label: 'Extra Web Page', price: 150 },
  { label: 'Additional Logo Concepts', price: 200 },
  { label: 'Extra Email Account Setup', price: 100 },
  { label: 'Google Ads Starter Setup', price: 400 },
  { label: 'Blog SEO Optimization', price: 250 },
  { label: 'Extra Social Media Templates', price: 150 },
  { label: 'Additional Strategy Call (30 min)', price: 250 },
  { label: 'Extra Drone Footage (Melbourne only)', price: 300 }
]
</script>
