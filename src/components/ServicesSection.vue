<template>
  <section class="py-16 sm:py-20 px-4 sm:px-6 md:px-10" data-aos="fade-up">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white rounded-lg p-6 text-center shadow-md transition card-hover"
          :data-aos="index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
          :data-aos-delay="index * 100"
          data-aos-duration="800"
        >
          <img :src="service.icon" class="h-12 w-12 mx-auto mb-4" />
          <h3 class="font-semibold text-base sm:text-lg text-[#D0008E]">
            {{ service.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>
