<template>
  <div 
    class="min-h-screen pt-24 px-6 sm:px-10 md:px-20"
    :style="{
      backgroundColor: themeStore.isDarkMode ? '#121212' : '#fff8f1',
      color: themeStore.isDarkMode ? '#E2E8F0' : '#1A1A1A'
    }"
  >
    <!-- Title -->
    <h1 
      class="text-4xl sm:text-6xl font-bold text-center mb-4"
      :style="{
        color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
      }"
    >About Us</h1>
    <p 
      class="text-center max-w-3xl mx-auto mb-10"
      :style="{
        color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
      }"
    >
      Learn about our mission, our values, and what drives us to build world-class digital experiences.
    </p>

    <!-- Brand & Founder Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <!-- Brand Info -->
      <div 
        class="shadow-lg rounded-2xl p-6 sm:p-8 text-center space-y-4"
        :style="{
          backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white'
        }"
      >
        <img src="../assets/logo.png" alt="Logo" class="w-36 h-36 mx-auto" />
        <h2 
          class="text-2xl font-bold"
          :style="{
            color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
          }"
        >Tech Kri-Kri Oasis</h2>

        <!-- Social Icons -->
        <div class="flex justify-center gap-6 text-2xl social-icons mb-2">
          <a 
            href="https://www.facebook.com/techkrikrioasis/" 
            target="_blank" 
            rel="noopener"
            :style="{
              color: themeStore.isDarkMode ? '#9CA3AF' : 'inherit'
            }"
          >
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </a>
          <a 
            href="https://x.com/techkrikrioasis" 
            target="_blank" 
            rel="noopener"
            :style="{
              color: themeStore.isDarkMode ? '#9CA3AF' : 'inherit'
            }"
          >
            <font-awesome-icon icon="fa-brands fa-x-twitter" />
          </a>
          <a 
            href="https://www.linkedin.com/company/techkrikrioasis" 
            target="_blank" 
            rel="noopener"
            :style="{
              color: themeStore.isDarkMode ? '#9CA3AF' : 'inherit'
            }"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
          <a 
            href="https://www.instagram.com/techkrikrioasis/" 
            target="_blank" 
            rel="noopener"
            :style="{
              color: themeStore.isDarkMode ? '#9CA3AF' : 'inherit'
            }"
          >
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
        </div>

        <p 
          class="text-sm leading-relaxed"
          :style="{
            color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
          }"
        >
          Tech Kri-Kri Oasis takes its name from the resilient Cretan goat 'Kri-Kri', symbolizing grit and perseverance.
          Paired with 'Oasis' — a nod to clarity and innovation — our brand reflects a balance between strength and strategic calm.
          <br /><br />
          We help businesses scale through custom websites, mobile apps, technical SEO, e-commerce platforms, digital marketing, 
          and multimedia solutions that not only look great but work flawlessly under pressure. Our mission is to simplify and 
          automate the back end of business — giving founders and teams the freedom to stay consistent, scale intelligently, 
          and focus on high-impact growth. We help clients TK²O the competition through bold strategy and powerful execution.
        </p>
      </div>

      <!-- Founder Info -->
      <div 
        class="shadow-lg rounded-2xl p-6 sm:p-8 text-center space-y-4"
        :style="{
          backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white'
        }"
      >
        <img src="https://assets.techkrikrioasis.com.au/founder.png" alt="Founder" class="w-36 h-36 mx-auto rounded-full object-cover" />
        <h2 
          class="text-2xl font-bold"
          :style="{
            color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
          }"
        >Ioannis Doulgerakis</h2>

        <!-- LinkedIn -->
        <div class="flex justify-center text-2xl social-icons">
          <a
            href="https://www.linkedin.com/in/ioannis-yiannis-doulgerakis-135651198/"
            target="_blank"
            rel="noopener"
            :style="{
              color: themeStore.isDarkMode ? '#9CA3AF' : 'inherit'
            }"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
        </div>

        <p 
          class="text-sm leading-relaxed"
          :style="{
            color: themeStore.isDarkMode ? '#9CA3AF' : '#4B5563'
          }"
        >
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
    <h3 
      class="text-2xl font-bold text-center mb-6"
      :style="{
        color: themeStore.isDarkMode ? '#FFFFFF' : '#1A1A1A'
      }"
    >What We Specialize In</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20 text-center">
      <div
        v-for="skill in specialties"
        :key="skill"
        class="shadow-sm rounded-xl py-4 font-semibold"
        :style="{
          backgroundColor: themeStore.isDarkMode ? '#1E1E1E' : 'white',
          color: themeStore.isDarkMode ? '#FF4DC1' : '#D0008E'
        }"
      >
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/ThemeStore';

const themeStore = useThemeStore();

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
  color: v-bind(themeStore.isDarkMode ? '#FF4DC1' : '#D0008E') !important;
}
</style>