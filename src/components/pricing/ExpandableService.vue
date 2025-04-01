<!-- File: ExpandableService.vue -->
<template>
    <div class="relative">
      <div
        @click="toggle"
        class="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition-all px-6 py-4 text-center flex flex-col items-center justify-center space-y-2 w-full h-full"
      >
        <slot name="icon" />
        <div class="flex items-center justify-center space-x-2">
          <span class="text-fuchsia-700 font-semibold">{{ title }}</span>
          <svg
            :class="{ 'rotate-180': isOpen }"
            class="w-4 h-4 text-fuchsia-700 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
  
      <transition name="fade-slide">
        <div v-show="isOpen" class="mt-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="(pkg, index) in packages"
              :key="index"
              class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all"
            >
              <h4 class="text-xl font-semibold mb-2">{{ pkg.name }}</h4>
              <p class="text-gray-500 text-sm mb-3">Starting from <strong>{{ pkg.price }}</strong></p>
              <ul class="text-sm text-left mb-4 space-y-1">
                <li v-for="(feature, i) in pkg.features" :key="i">🔹 {{ feature }}</li>
              </ul>
              <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Select</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const props = defineProps({
    title: String,
    packages: Array
  })
  const isOpen = ref(false)
  const toggle = () => {
    isOpen.value = !isOpen.value
  }
  </script>
  
  <style scoped>
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.4s ease;
  }
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  </style>
  