<!-- File: components/ui/RevealBlock.vue -->
<template>
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: distance
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          duration: duration / 1000,
          ease: 'ease-out'
        }
      }"
      v-intersection-observer="onVisible"
      class="motion-block"
    >
      <slot />
    </div>
  </template>
  
  <script setup>
  import { useMotion, useIntersectionObserver } from '@vueuse/motion'
  import { ref } from 'vue'
  
  defineProps({
    distance: {
      type: Number,
      default: 30 // how far it comes from (Y-axis)
    },
    duration: {
      type: Number,
      default: 800 // in ms
    }
  })
  
  const el = ref(null)
  const { motion } = useMotion(el)
  
  const onVisible = ([{ isIntersecting }]) => {
    if (isIntersecting) motion?.apply('enter')
  }
  </script>
  
  <style scoped>
  .motion-block {
    will-change: opacity, transform;
  }
  </style>
  