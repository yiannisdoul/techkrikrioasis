<template>
    <WizardShell
      :title="basePackage.title"
      :price="basePackage.price"
      :addons="[
        { label: 'Automated Email Setup', price: 900 },
        { label: 'Landing Funnel', price: 1500 }
      ]"
      @close="$emit('close')"
    />
  </template>
  
  <script setup>
  import WizardShell from './WizardShell.vue'
  defineProps({ basePackage: Object })
  defineEmits(['close'])
  </script>
  