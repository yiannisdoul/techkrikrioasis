<template>
  <section class="w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-x-hidden" data-aos="fade-up">
    <div class="max-w-7xl mx-auto w-full">

      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div class="grid place-content-center grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md text-center card-hover transition-transform overflow-hidden"
            :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
            :data-aos-delay="index * 100"
            data-aos-duration="800"
          >
            <p class="text-gray-700 text-sm sm:text-base mb-4">
              “{{ testimonial.text }}”
            </p>
            <h4 class="font-bold text-[#D0008E] text-base sm:text-lg">
              {{ testimonial.name }}
            </h4>
            <p class="text-xs sm:text-sm text-gray-500">
              {{ testimonial.role }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  { name: 'Maria P.', role: 'Startup Founder', text: 'The team made dev fast, clean, and on-brand. Loved working with TK²O!' },
  { name: 'Jason L.', role: 'Ecom Manager', text: 'We saw 3x traffic and 2x conversions post-launch.' },
  { name: 'Blaz V.', role: 'Product Owner', text: 'They handled our full-stack launch and maintenance. Super efficient.' },
  { name: 'Ahmad Z.', role: 'Agency Partner', text: 'I only refer them for all things SEO and maintenance — worth every dollar.' },
];
</script>
