<template>
  <div 
    class="loading-spinner-container" 
    :class="{ 
      'is-overlay': overlay, 
      'is-fullscreen': fullscreen
    }"
  >
    <div 
      class="spinner"
      :class="[`size-${size}`, { 'with-text': text }]"
      :style="{ 
        borderTopColor: primaryColor || '#E85D04', 
        borderRightColor: secondaryColor || '#D0008E'
      }"
    ></div>
   
  </div>
</template>

<script setup lang="ts">
defineProps({
  // Controls size of the spinner - small, medium, large
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value)
  },
  
  text: {
    type: String,
    default: ''
  },

  primaryColor: {
    type: String,
    default: '#E85D04' // Orange 
  },
 
  secondaryColor: {
    type: String,
    default: '#D0008E' // Magenta 
  },
 
  overlay: {
    type: Boolean,
    default: false
  },
 
  fullscreen: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.loading-spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.is-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 50;
}

.is-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;
}

.spinner {
  border-radius: 50%;
  border-style: solid;
  border-bottom-color: transparent;
  border-left-color: transparent;
  animation: spin 1s linear infinite;
}

.size-small {
  width: 1.5rem;
  height: 1.5rem;
  border-width: 2px;
}

.size-medium {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 3px;
}

.size-large {
  width: 4rem;
  height: 4rem;
  border-width: 4px;
}

.with-text {
  margin-bottom: 0.5rem;
}

.loading-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1A1A1A;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>