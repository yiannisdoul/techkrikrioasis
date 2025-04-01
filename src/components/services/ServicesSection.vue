<template>
  <section class="pt-32 sm:pt-32 pb-20 px-4 sm:px-6 md:px-10" data-aos="fade-up">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white rounded-xl p-6 text-center shadow transition-all border border-transparent hover:shadow-lg hover:border-[#E85D04] hover:-translate-y-1"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
          data-aos-duration="900"
        >
          <img :src="service.icon" class="h-12 w-12 mx-auto mb-4" />
          <h3 class="text-[#D0008E] font-semibold text-base sm:text-lg">
            {{ service.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import webDevIcon from '@/assets/icons/web-dev.png'
import mobileAppIcon from '@/assets/icons/mobile-app.png'
import ecommerceIcon from '@/assets/icons/ecommerce.png'
import seoIcon from '@/assets/icons/seo.png'
import digitalMarketingIcon from '@/assets/icons/digital_marketing.png'
import dronePhotographyIcon from '@/assets/icons/drone_photography.png'
import graphicDesignIcon from '@/assets/icons/graphic_design.png'
import strategyConsultingIcon from '@/assets/icons/strategy_consulting.png'

const services = [
  { title: 'Web Development', icon: webDevIcon },
  { title: 'Mobile App Development', icon: mobileAppIcon },
  { title: 'E-Commerce', icon: ecommerceIcon },
  { title: 'SEO', icon: seoIcon },
  { title: 'Digital Marketing', icon: digitalMarketingIcon },
  { title: 'Drone Photography', icon: dronePhotographyIcon },
  { title: 'Graphic Design', icon: graphicDesignIcon },
  { title: 'Strategy & Consulting', icon: strategyConsultingIcon },
]
</script>
