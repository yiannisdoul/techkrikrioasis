<template>
  <main class="bg-[#FDF8F3] text-[#1A1A1A]">
    <HeroSection />
    <ServicesSection />
    <WhyUsSection />
    <TestimonialsSection />
    <!-- <CTASection /> -->
  </main>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import WhyUsSection from '../components/WhyUsSection.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
// import CTASection from '../components/CTASection.vue';
</script>

<style scoped>
/* Smooth fade-in scroll animation */
[data-aos] {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-aos].aos-animate {
  opacity: 1;
  transform: none;
}

/* Vibrate/shake on hover */
.card-hover:hover {
  animation: vibrate 0.3s linear;
}
@keyframes vibrate {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
</style>
