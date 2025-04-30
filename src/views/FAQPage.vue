<template>
  <div class="bg-[#fff8f1] min-h-screen pt-24 px-6 sm:px-10 md:px-20 text-[#1A1A1A]">
    <h1 class="text-4xl sm:text-6xl font-bold text-center mb-4">FAQ</h1>
    <p class="text-center text-gray-600 max-w-3xl mx-auto mb-10">
      Find answers to common questions about our services, process, and more.
    </p>
     <!-- FAQ Accordion -->
    <FAQAccordion />

    <div class="max-w-3xl mx-auto text-center my-16 p-8 bg-white rounded-xl shadow-lg" data-aos="fade-up">
      <h2 class="text-2xl font-bold mb-4 text-[#D0008E]">Still have questions?</h2>
      <p class="text-gray-600 mb-6">
        Our team is ready to help you with any specific questions about your project.
      </p>
      <router-link 
        to="/contact" 
        class="inline-block bg-[#E85D04] text-white font-bold px-6 py-3 rounded-md hover:bg-[#d94c00] transition"
      >
        Book a Free Call
      </router-link>
    </div>
  </div>
</template>
  
<script setup lang="ts">
    import FAQAccordion from '../components/sections/FAQAccordion.vue';
</script>
  