<template>
  <section
    class="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left"
    data-aos="fade-right"
  >
    <!-- Left Content -->
    <div data-aos="fade-right" data-aos-duration="800">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Empowering Your Digital<br />
        Transformation
      </h1>
      <p class="text-gray-600 text-base sm:text-lg mb-6">
        With 5 years of full-stack expertise, we craft cutting-edge websites, e-commerce platforms,
        and mobile apps customized to your business needs.
      </p>
      <router-link
        to="/contact"
        class="inline-block bg-[#E85D04] text-white px-6 py-3 rounded-md hover:bg-[#D0008E] transition text-sm sm:text-base"
      >
        Get Started
      </router-link>
    </div>

    <!-- Right Image -->
    <div class="flex justify-center md:justify-end" data-aos="fade-left" data-aos-duration="800">
      <img
        src="../assets/hero-illustration.png"
        alt="Hero illustration"
        class="w-64 sm:w-72 md:w-full max-w-md"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed here
</script>
