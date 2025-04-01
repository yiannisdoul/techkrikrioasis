<template>
    <WizardShell
      :title="basePackage.title"
      :price="basePackage.price"
      :addons="[
        { label: 'Extra Pages', price: 800 },
        { label: 'Advanced SEO', price: 1200 },
        { label: 'Logo Suite', price: 400 }
      ]"
      @close="$emit('close')"
    />
  </template>
  
  <script setup>
  import WizardShell from './WizardShell.vue'
  defineProps({ basePackage: Object })
  defineEmits(['close'])
  </script>
  