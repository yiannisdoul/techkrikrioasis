<template>
  <section class="w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-x-hidden" data-aos="fade-up">
    <div class="max-w-7xl mx-auto w-full">

      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div class="grid place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="bg-[#FDF8F3] rounded-lg p-4 sm:p-5 md:p-6 text-center shadow-sm card-hover transition-transform"
            :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
            :data-aos-delay="index * 100"
            data-aos-duration="800"
          >
            <img :src="item.icon" class="h-12 w-12 mx-auto mb-4" />
            <h3 class="text-[#E85D04] font-bold text-base sm:text-lg mb-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 text-sm sm:text-base">
              {{ item.text }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

const features = [
  { title: 'Human-Centric Design', text: 'We focus on intuitive UI/UX that makes your users stick and stay.', icon: 'https://assets.techkrikrioasis.com.au/icons/human-centric.webp' },
  { title: 'ROI-Focused Strategy', text: 'Our services are designed to deliver ROI on investment.', icon: 'https://assets.techkrikrioasis.com.au/icons/roi.webp' },
  { title: 'Affordable Pricing', text: 'Transparent plans that support startups and SMEs.', icon: 'https://assets.techkrikrioasis.com.au/icons/pricing.webp' },
  { title: 'Full Tech Stack', text: 'From front-end to back-end, we deliver end-to-end builds.', icon: 'https://assets.techkrikrioasis.com.au/icons/tools.webp' },
  { title: 'Fast Turnaround', text: 'We prioritize speed without sacrificing quality or support.', icon: 'https://assets.techkrikrioasis.com.au/icons/speed.webp' },
  { title: 'Transparent Delivery', text: 'No fluff, no hidden scope — just real, milestone-driven results.', icon: 'https://assets.techkrikrioasis.com.au/icons/transparent-delivery.webp' },
];
</script>
