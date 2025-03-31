<!-- <template>
    <div class="pt-24">
      <h1
        class="text-4xl font-bold text-[var(--primary-color)] mb-4 text-center"
        data-aos="fade-down"
      >
        Our Portfolio
      </h1>
      <p class="text-gray-700 max-w-2xl mx-auto text-center mb-12" data-aos="fade-up">
        Browse our portfolio by service category. Each section features recent work that highlights our strengths.
      </p>
  
      <PortfolioSection
        v-for="(section, idx) in sections"
        :key="idx"
        :title="section.category"
        :projects="section.projects"
        :animation="idx % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
        @open="openModal"
      />
  
      // Modal
      <PortfolioModal
        v-if="activeProject"
        :isOpen="!!activeProject"
        :title="activeProject.title"
        :description="activeProject.description"
        :images="activeProject.images"
        :link="activeProject.link"
        @close="activeProject = null"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import PortfolioSection from '../components/PortfolioSection.vue';
  import PortfolioModal from '../components/PortfolioModal.vue';
  
  const sections = [
    {
      category: 'Web Development',
      projects: [
      {
        title: 'Crypto Dashboard UI',
        cover: '/projects/crypto-dashboard.jpg',
        description: 'Responsive dashboard for tracking live tokens and wallets.',
        images: ['/projects/crypto-dashboard.jpg'],
        link: 'https://crypto.example.com',
      },
      {
        title: 'Personal Portfolio',
        cover: '/projects/dev-portfolio.jpg',
        description: 'Modern dev portfolio with animation and blog integration.',
        images: ['/projects/dev-portfolio.jpg'],
        link: 'https://johnsmith.dev',
      },
      {
        title: 'Real Estate Agency',
        cover: '/projects/real-estate.jpg',
        description: 'Property listings with map filters and contact forms.',
        images: ['/projects/real-estate.jpg'],
        link: 'https://homesite.example.com',
      },
      {
        title: 'Restaurant Site + Menu Builder',
        cover: '/projects/restaurant.jpg',
        description: 'Mobile-friendly food menu system and booking form.',
        images: ['/projects/restaurant.jpg'],
        link: 'https://eatsite.example.com',
      },
      {
        title: 'Restaurant Site + Menu Builder',
        cover: '/projects/restaurant.jpg',
        description: 'Mobile-friendly food menu system and booking form.',
        images: ['/projects/restaurant.jpg'],
        link: 'https://eatsite.example.com',
      },
      {
        title: 'Restaurant Site + Menu Builder',
        cover: '/projects/restaurant.jpg',
        description: 'Mobile-friendly food menu system and booking form.',
        images: ['/projects/restaurant.jpg'],
        link: 'https://eatsite.example.com',
      },
      {
        title: 'Restaurant Site + Menu Builder',
        cover: '/projects/restaurant.jpg',
        description: 'Mobile-friendly food menu system and booking form.',
        images: ['/projects/restaurant.jpg'],
        link: 'https://eatsite.example.com',
      },
      {
        title: 'Restaurant Site + Menu Builder',
        cover: '/projects/restaurant.jpg',
        description: 'Mobile-friendly food menu system and booking form.',
        images: ['/projects/restaurant.jpg'],
        link: 'https://eatsite.example.com',
      },
      {
        title: 'Restaurant Site + Menu Builder',
        cover: '/projects/restaurant.jpg',
        description: 'Mobile-friendly food menu system and booking form.',
        images: ['/projects/restaurant.jpg'],
        link: 'https://eatsite.example.com',
      },
    ],
  },
    {
      category: 'Mobile App Development',
      projects: [
      {
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      ],
    },
    {
      category: 'SEO',
      projects: [
      {
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
{
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
{
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
{
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
}
      ],
    },
    {
      category: 'E-Commerce',
      projects: [
      {
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      }, 
      ],
    },
    {
      category: 'Digital Marketing',
      projects: [
      {
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      ],
    },
    {
      category: 'Drone Photography',
      projects: [
      {
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      ],
    },
    {
      category: 'Graphic Design',
      projects: [
      {
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      ],
    },
    {
      category: 'Strategy & Consulting',
      projects: [
      {
  title: 'Example', 
  cover: '/projects/example.png', // First image is also used as the card thumbnail 
  description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
  images: [
    '/projects/example.png', 
    '/projects/example-2.png', 
    '/projects/example-3.png', 
  ],
  link: 'https://idoul.dev' 
},
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },    
      {
        title: 'Example', 
        cover: '/projects/example.png', // First image is also used as the card thumbnail 
        description: 'Modern developer portfolio with animations, scroll effects, and blog integration. Built with Vue 3 and Tailwind CSS.',
        images: [
          '/projects/example.png', 
          '/projects/example-2.png', 
          '/projects/example-3.png', 
        ],
        link: 'https://idoul.dev' 
      },
      ],
    },
  ];
  
  const activeProject = ref<null | typeof sections[0]['projects'][0]>(null);
  const openModal = (project: typeof sections[0]['projects'][0]) => {
    activeProject.value = project;
  };
  </script>
   -->

<template>
<div class="bg-[#fff8f1] pt-24 px-6 sm:px-10 md:px-20 text-[#1A1A1A] min-h-screen">
    <!-- Title -->
    <h1 class="text-4xl sm:text-5xl font-bold text-center mb-4">Our Portfolio</h1>
    <p class="text-center text-gray-600 max-w-3xl mx-auto mb-10">
    Browse our past projects across web, mobile, marketing and tech. Filter by specialty or explore our range of impactful builds.
    </p>

    <!-- 🟨 Legend -->
    <div class="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium">
    <div v-for="(color, category) in tagColors" :key="category" class="flex items-center gap-2">
        <span :style="{ backgroundColor: color }" class="w-4 h-4 rounded-full"></span>
        <span>{{ category }}</span>
    </div>
    </div>

    <!-- 🔄 Unified Grid Layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    <PortfolioCard
        v-for="(project, index) in allProjects"
        :key="index"
        :title="project.title"
        :cover="project.cover"
        :category="project.category"
        @click="openModal(project)"
    />
    </div>

    <!-- 🪟 Modal -->
    <PortfolioModal
    v-if="selectedProject"
    :isOpen="true"
    :title="selectedProject.title"
    :description="selectedProject.description"
    :images="selectedProject.images"
    :link="selectedProject.link"
    @close="selectedProject = null"
    />

</div>
</template>

<script setup lang="ts">
import PortfolioCard from '../components/PortfolioCard.vue'
import PortfolioModal from '../components/PortfolioModal.vue'
import { ref } from 'vue'

// 🔁 Unified project list
const allProjects = [
    {
        title: 'Crypto Dashboard UI',
        cover: '/projects/crypto-dashboard.jpg',
        images: ['/projects/crypto-dashboard.jpg'],
        description: 'Analytics dashboard with charts and login. Vue + Tailwind.',
        link: 'https://crypto-ui.com',
        category: 'Web Development',
    },
    {
        title: 'Personal Portfolio',
        cover: '/projects/dev-portfolio.jpg',
        images: [
        '/projects/dev-portfolio.jpg',
        '/projects/dev-portfolio-2.jpg',
        '/projects/dev-portfolio-3.jpg',
        ],
        description: 'Modern dev portfolio with animation and blog integration.',
        link: 'https://johnsmith.dev',
        category: 'Web Development',
    },
    {
        title: 'Restaurant Ordering App',
        cover: '/projects/restaurant-app.jpg',
        images: ['/projects/restaurant-app.jpg'],
        description: 'Mobile-friendly ordering experience with menu builder.',
        link: '',
        category: 'Mobile App Development',
    },
    {
        title: 'SEO Audit & Content Setup',
        cover: '/projects/seo-site.jpg',
        images: ['/projects/seo-site.jpg'],
        description: 'Local SEO audit, keyword optimization and blog strategy.',
        link: '',
        category: 'SEO',
    },
    {
        title: 'Ecommerce T-Shirt Store',
        cover: '/projects/shirt-store.jpg',
        images: ['/projects/shirt-store.jpg'],
        description: 'Shopify e-store with integrated analytics and upsell funnels.',
        link: '',
        category: 'E-Commerce',
    },
    {
        title: 'Drone Real Estate Footage',
        cover: '/projects/drone-home.jpg',
        images: ['/projects/drone-home.jpg'],
        description: 'FPV drone shots for premium real estate listings.',
        link: '',
        category: 'Drone Photography',
    },
    ]

// 🎨 Color mapping
const tagColors: Record<string, string> = {
    'Web Development': '#D0008E',
    'Mobile App Development': '#E85D04',
    'SEO': '#1F78B4',
    'E-Commerce': '#FF9F1C',
    'Digital Marketing': '#4CAF50',
    'Drone Photography': '#7C3AED',
    'Graphic Design': '#F43F5E',
    'Strategy & Consulting': '#0D9488',
}

// 📌 Modal logic
const selectedProject = ref<any | null>(null)
const openModal = (project: any) => {
selectedProject.value = project
}
</script>
