<template>
  <!-- No need to change background for footer since it's already dark (#111) -->
  <footer class="bg-[#111] dark:bg-gray-950 text-white py-6 mt-2 text-sm transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-2 sm:space-y-0">
      <!-- Left: Location -->
      <div class="w-full sm:w-auto flex items-center gap-1 justify-center sm:justify-start">
        <span>📍</span>
        <p>Melbourne, Australia</p>
      </div>

      <!-- Center: Copyright -->
      <div class="w-full sm:w-auto text-center">
        <p>© 2025 Tech Kri Kri Oasis. All rights reserved.</p>
      </div>

      <!-- Right: Contact Info -->
      <div class="w-full sm:w-auto flex items-center gap-4 justify-center sm:justify-end">
        <!-- Email -->
        <a
          href="mailto:hello@techkrikrioasis.com.au"
          class="flex items-center gap-1 hover:underline hover:text-[#E85D04] dark:hover:text-[#FF7E33] transition"
        >
          <span>📧</span>
          <span>hello@techkrikrioasis.com.au</span>
        </a>

        <!-- Phone -->
        <a
          href="tel:+61402165954"
          class="flex items-center gap-1 hover:underline hover:text-[#E85D04] dark:hover:text-[#FF7E33] transition"
        >
          <span>📞</span>
          <span>+61 402 165 954</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No logic needed
</script>

<style scoped></style>