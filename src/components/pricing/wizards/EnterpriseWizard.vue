<template>
  <WizardShell
    title="🟡 Enterprise Package"
    :price="50000"
    :addons="EnterpriseAddons"
    @close="$emit('close')"
  />
</template>

<script setup lang="ts">
import WizardShell from './WizardShell.vue'

const EnterpriseAddons = [
  { label: 'Extra SaaS Module or Web Feature', price: 6000 },
  { label: 'Enterprise App Integration (APIs/Payments)', price: 5000 },
  { label: 'International SEO Package', price: 4500 },
  { label: 'Full AI KPI + BI Dashboard Setup', price: 7000 },
  { label: 'Advanced API Integrations Bundle', price: 5500 },
  { label: 'Additional LMS Course System Setup', price: 4000 },
  { label: 'Global Brand Rebranding Package', price: 4500 },
  { label: '1-on-1 Leadership Consulting Package', price: 6000 },
  { label: 'Full 4K Drone & Cinematic Brand Video (Melbourne)', price: 5000 }
]
</script>

