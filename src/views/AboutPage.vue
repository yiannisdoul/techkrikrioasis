<template>
  <div class="bg-[#fff8f1] min-h-screen pt-24 px-6 sm:px-10 md:px-20 text-[#1A1A1A]">
    <!-- Title -->
    <h1 class="text-4xl sm:text-6xl font-bold text-center mb-4">About Us</h1>
    <p class="text-center text-gray-600 max-w-3xl mx-auto mb-10">
      Learn about our mission, our values, and what drives us to build world-class digital experiences.
    </p>

    <!-- Brand & Founder Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <!-- Brand Info -->
      <div class="bg-white shadow-lg rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <img src="../assets/logo.png" alt="Logo" class="w-36 h-36 mx-auto" />
        <h2 class="text-2xl font-bold">Tech Kri-Kri Oasis</h2>

        <!-- Social Icons -->
        <div class="flex justify-center gap-6 text-2xl social-icons mb-2">
          <a href="https://www.facebook.com/techkrikrioasis/" target="_blank" rel="noopener">
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </a>
          <a href="https://x.com/techkrikrioasis" target="_blank" rel="noopener">
            <font-awesome-icon icon="fa-brands fa-x-twitter" />
          </a>
          <a href="https://www.linkedin.com/company/techkrikrioasis" target="_blank" rel="noopener">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
          <a href="https://www.instagram.com/techkrikrioasis/" target="_blank" rel="noopener">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
        </div>

        <p class="text-sm text-gray-700 leading-relaxed">
          Tech Kri-Kri Oasis takes its name from the resilient Cretan goat ‘Kri-Kri’, symbolizing grit and perseverance.
          Paired with ‘Oasis’ — a nod to clarity and innovation — our brand reflects a balance between strength and strategic calm.
          <br /><br />
          We help businesses scale through custom websites, mobile apps, technical SEO, e-commerce platforms, digital marketing, 
          and multimedia solutions that not only look great but work flawlessly under pressure. Our mission is to simplify and 
          automate the back end of business — giving founders and teams the freedom to stay consistent, scale intelligently, 
          and focus on high-impact growth. We help clients TK²O the competition through bold strategy and powerful execution.
        </p>
      </div>

      <!-- Founder Info -->
      <div class="bg-white shadow-lg rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <img src="../assets/founder.JPG" alt="Founder" class="w-36 h-36 mx-auto rounded-full object-cover" />
        <h2 class="text-2xl font-bold">Ioannis Doulgerakis</h2>

        <!-- LinkedIn -->
        <div class="flex justify-center text-2xl social-icons">
          <a
            href="https://www.linkedin.com/in/ioannis-yiannis-doulgerakis-135651198/"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
        </div>

        <p class="text-sm text-gray-700 leading-relaxed">
          Yiannis, the founder and operations manager of Tech Kri-Kri Oasis, brings a powerful blend of technical expertise,
          creativity, and business acumen to the digital space. With years of experience across both government and private sectors,
          he excels in leading high-performance teams, streamlining operations, and making data-driven strategic decisions.
          <br /><br />
          A graduate in Software Engineering (Honours), Yiannis combines full-stack development with sales mastery to deliver 
          results-focused digital platforms that convert and scale. With empathy-driven leadership and a vision for impact, 
          he builds solutions that help businesses outthink, outbuild, and outperform the competition.
        </p>
      </div>
    </div>

    <!-- Specialties -->
    <h3 class="text-2xl font-bold text-center mb-6">What We Specialize In</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20 text-center">
      <div
        v-for="skill in specialties"
        :key="skill"
        class="bg-white shadow-sm rounded-xl py-4 text-[#D0008E] font-semibold"
      >
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const specialties = [
  'Web Development',
  'Mobile App Development',
  'SEO',
  'E-Commerce',
  'Digital Marketing',
  'Drone Photography',
  'Graphic Design',
  'Strategy & Consulting',
];
</script>

<style scoped>
.social-icons a {
  transition: all 0.3s ease;
}
.social-icons a:hover {
  transform: scale(1.15) translateY(-2px);
  color: #D0008E;
}
</style>
