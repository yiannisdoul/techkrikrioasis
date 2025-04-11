<!-- <template>
    <div
      @click="onClick"
      class="bg-white p-6 rounded-lg shadow-md text-center transition card-hover cursor-pointer hover:shadow-lg"
      :data-aos="animation"
    >
      <img :src="cover" class="h-32 w-full object-cover rounded mb-4" />
      <h3 class="text-base sm:text-lg font-semibold text-[#D0008E]">
        {{ title }}
      </h3>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
    cover: string;
    animation?: string;
    onClick: () => void;
  }>();
  </script>
   -->

   <template>
    <div
      class="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition cursor-pointer border border-transparent hover:border-[#E85D04]"
      @click="$emit('click')"
    >
      <img
        :src="cover"
        alt="Project cover"
        class="h-40 w-full object-cover rounded-md mb-4"
      />
  
      <h3 class="text-[#D0008E] font-semibold text-lg mb-2">{{ title }}</h3>
  
      <!-- Category Pills -->
      <div class="flex flex-wrap justify-center gap-2 mt-2">
        <span
          v-for="(cat, index) in categories"
          :key="index"
          class="text-white text-xs px-2 py-1 rounded-full"
          :style="{ backgroundColor: tagColors[cat] || '#ccc' }"
        >
          {{ cat }}
        </span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  // Props expected
  defineProps<{
    title: string
    cover: string
    categories: string[]
  }>()
  
  // 🎨 Category Colors Map (same as PortfolioPage)
  const tagColors: Record<string, string> = {
    'Web Development': '#D0008E',
    'Mobile App Development': '#E85D04',
    'SEO': '#0077B6',
    'E-Commerce': '#FFA500',
    'Digital Marketing': '#52B788',
    'Drone Photography': '#7B2CBF',
    'Graphic Design': '#E63946',
    'Strategy & Consulting': '#008080',
  }
  </script>
  
  <style scoped>
  /* Optional slight hover lift */
  div:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease;
  }
  </style>
  