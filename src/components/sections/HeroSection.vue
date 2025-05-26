<template>
  <section
    class="w-full px-4 sm:px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left"
    data-aos="fade-right"
  >
    <div data-aos="fade-right" data-aos-duration="800">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight break-words">
        Empowering Your<br />
        Digital Transformation
      </h1>
      <p class="text-gray-600 text-base sm:text-lg mb-6">
        Backed by 15 years of combined sales and full-stack development experience, 
        we create cutting-edge websites, e-commerce platforms, and mobile apps that don’t 
        just look great—they drive results and align perfectly with your business strategy.
      </p>
      <router-link
        to="/services"
        class="inline-block bg-[#E85D04] text-white px-6 py-3 rounded-md hover:bg-[#D0008E] transition text-sm sm:text-base"
      >
        Get Started
      </router-link>
    </div>

    <div class="flex justify-center md:justify-end" data-aos="zoom-in" data-aos-duration="800">
      <img
        src="https://assets.techkrikrioasis.com.au/hero-illustration.png"
        alt="Hero illustration"
        class="w-56 sm:w-64 md:w-72 max-w-full h-auto"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed
</script>
