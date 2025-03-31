<template>
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
  
      <!-- Modal -->
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
  