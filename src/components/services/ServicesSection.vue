<template>
  <section 
    class="w-full px-4 sm:px-6 md:px-10 pt-32 pb-20" 
    data-aos="fade-up"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : 'transparent'
    }"
  >
    <div class="max-w-6xl mx-auto">
      <h2 
        class="text-2xl sm:text-3xl font-bold text-center mb-12"
        :style="{
          color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
        }"
      >
        Our Services
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="rounded-xl p-6 text-center shadow transition-all border border-transparent hover:shadow-lg hover:-translate-y-1"
          :style="{
            backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white',
            '--hover-border-color': themeStore.isDarkMode ? '#FF7E33' : '#E85D04',
            borderColor: 'transparent'
          }"
          @mouseenter="updateBorderColor($event)"
          @mouseleave="resetBorderColor($event)"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
          data-aos-duration="900"
        >
          <img 
            :src="service.icon" 
            class="h-12 w-12 mx-auto mb-4" 
            :style="{
              filter: themeStore.isDarkMode ? 'brightness(1.1)' : 'none'
            }"
          />
          <h3 
            class="font-semibold text-base sm:text-lg"
            :style="{
              color: themeStore.isDarkMode ? '#FF4DC1' : '#D0008E'
            }"
          >
            {{ service.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '../../stores/ThemeStore';
import webDevIcon from '@/assets/icons/web-dev.png';
import mobileAppIcon from '@/assets/icons/mobile-app.png';
import ecommerceIcon from '@/assets/icons/ecommerce.png';
import seoIcon from '@/assets/icons/seo.png';
import digitalMarketingIcon from '@/assets/icons/digital_marketing.png';
import dronePhotographyIcon from '@/assets/icons/drone_photography.png';
import graphicDesignIcon from '@/assets/icons/graphic_design.png';
import strategyConsultingIcon from '@/assets/icons/strategy_consulting.png';

const themeStore = useThemeStore();

const services = [
  { title: 'Web Development', icon: webDevIcon },
  { title: 'Mobile App Development', icon: mobileAppIcon },
  { title: 'E-Commerce', icon: ecommerceIcon },
  { title: 'SEO', icon: seoIcon },
  { title: 'Digital Marketing', icon: digitalMarketingIcon },
  { title: 'Drone Photography', icon: dronePhotographyIcon },
  { title: 'Graphic Design', icon: graphicDesignIcon },
  { title: 'Strategy & Consulting', icon: strategyConsultingIcon },
];

// Handle hover effect for cards
const updateBorderColor = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  const hoverColor = getComputedStyle(target).getPropertyValue('--hover-border-color');
  target.style.borderColor = hoverColor;
}

const resetBorderColor = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  target.style.borderColor = 'transparent';
}
</script>