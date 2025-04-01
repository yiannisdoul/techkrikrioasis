<template>
    <WizardShell :title="basePackage.title" :price="basePackage.price" @close="$emit('close')" />
  </template>
  
  <script setup>
  import WizardShell from './WizardShell.vue'
  defineProps({ basePackage: Object })
  defineEmits(['close'])
  </script>
  