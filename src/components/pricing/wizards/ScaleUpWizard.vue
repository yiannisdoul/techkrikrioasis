<template>
    <WizardShell
      :title="basePackage.title"
      :price="basePackage.price"
      :addons="[
        { label: 'Full App Store Setup', price: 2000 },
        { label: 'UX Design Sprint', price: 2500 }
      ]"
      @close="$emit('close')"
    />
  </template>
  
  <script setup>
  import WizardShell from './WizardShell.vue'
  defineProps({ basePackage: Object })
  defineEmits(['close'])
  </script>
  