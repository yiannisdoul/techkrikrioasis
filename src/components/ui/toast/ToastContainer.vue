<template>
    <div class="fixed top-6 right-6 z-50 space-y-3 max-w-sm">
      <TransitionGroup name="toast">
        <ToastNotification 
          v-for="notification in Array.from(toastService.notifications.values())"
          :key="notification.id"
          :id="notification.id"
          :message="notification.message"
          :type="notification.type"
          @close="toastService.remove(notification.id)"
        />
      </TransitionGroup>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useToast } from '../../../services/toast'
  import ToastNotification from './ToastNotification.vue'
  
  const toastService = useToast()
  </script>
  
  <style scoped>
  .toast-enter-active,
  .toast-leave-active {
    transition: all 0.3s ease;
  }
  
  .toast-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }
  
  .toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  </style>