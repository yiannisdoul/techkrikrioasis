<template>
    <WizardShell
      :title="basePackage.title"
      :price="basePackage.price"
      :addons="[
        { label: 'Custom Admin Dashboard', price: 5000 },
        { label: 'Dedicated VPS Setup', price: 3000 },
        { label: '6-Month SLA Contract', price: 4000 }
      ]"
      @close="$emit('close')"
    />
  </template>
  
  <script setup>
  import WizardShell from './WizardShell.vue'
  defineProps({ basePackage: Object })
  defineEmits(['close'])
  </script>
  