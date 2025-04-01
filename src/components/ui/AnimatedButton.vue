<template>
    <button
      class="group relative cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium py-2 px-4 rounded-lg shadow text-sm overflow-hidden transition-all duration-300 hover:from-yellow-500 hover:to-orange-600 focus:outline-none ripple"
      @click="$emit('click')"
    >
      <span class="relative z-10">{{ label }}</span>
      <span
        class="absolute top-0 left-[-75%] w-[200%] h-full bg-white/30 transform rotate-12 group-hover:left-[100%] transition-all duration-700 ease-out"
      ></span>
    </button>
  </template>
  
  <script setup lang="ts">
  defineProps<{ label: string }>()
  defineEmits(['click'])
  </script>
  
  <style scoped>
  /* Ripple click animation */
  .ripple {
    position: relative;
    overflow: hidden;
  }
  .ripple:active::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: white;
    opacity: 0.3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ripple-effect 0.6s ease-out;
  }
  @keyframes ripple-effect {
    from {
      transform: scale(0);
      opacity: 0.3;
    }
    to {
      transform: scale(10);
      opacity: 0;
    }
  }
  </style>
  