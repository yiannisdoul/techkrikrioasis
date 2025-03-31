<template>
  <section class="py-16 sm:py-20 px-4 sm:px-6 md:px-10" data-aos="fade-up">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :icon="service.icon"
          :onClick="() => openModal(service)"
          :animation="index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
        />
      </div>
    </div>

    <!-- Dynamic Modal -->
    <ServiceModal :isOpen="modalOpen" @close="modalOpen = false">
      <div v-if="selectedService">
        <h3 class="text-2xl font-bold mb-4 text-[#D0008E]">{{ selectedService.title }}</h3>
        <p class="text-gray-700 text-sm sm:text-base">
          <!-- Replace with real content later -->
          This is a placeholder for {{ selectedService.title }} details. It can include pricing, sub-packages, features, and images.
        </p>
      </div>
    </ServiceModal>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServiceCard from './ServiceCard.vue';
import ServiceModal from './ServiceModal.vue';

import webDevIcon from '../assets/icons/web-dev.png';
import mobileAppIcon from '../assets/icons/mobile-app.png';
import ecommerceIcon from '../assets/icons/ecommerce.png';
import seoIcon from '../assets/icons/seo.png';

const services = [
  { title: 'Web Development', icon: webDevIcon },
  { title: 'Mobile App Development', icon: mobileAppIcon },
  { title: 'E-Commerce', icon: ecommerceIcon },
  { title: 'SEO', icon: seoIcon },
];

const modalOpen = ref(false);
const selectedService = ref<{ title: string; icon: string } | null>(null);

const openModal = (service: { title: string; icon: string }) => {
  selectedService.value = service;
  modalOpen.value = true;
};
</script>
