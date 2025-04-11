<template>
  <WizardShell
    title="🟡 Pro Package"
    :price="10000"
    :addons="ProAddons"
    @close="$emit('close')"
  />
</template>

<script setup lang="ts">
import WizardShell from './WizardShell.vue'

const ProAddons = [
  { label: 'Extra Custom Website Page', price: 350 },
  { label: 'Additional Mobile App Screen', price: 450 },
  { label: 'Extended Brand Asset Pack', price: 400 },
  { label: 'Full Landing Page Copywriting', price: 700 },
  { label: 'SEO Deep Audit (20+ keywords)', price: 900 },
  { label: 'Advanced CRM Automation Setup', price: 1200 },
  { label: 'Funnel Event Tracking Setup', price: 600 },
  { label: 'Additional 10 Social Media Templates', price: 300 },
  { label: 'Executive Strategy Session (90 min)', price: 400 },
  { label: 'Cinematic Drone Video Upgrade (Melbourne)', price: 800 }
]
</script>

