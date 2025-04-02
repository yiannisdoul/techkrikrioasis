<script lang="ts">
// ✅ Blog metadata
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'How to Build a Scalable Website for Your Startup',
  date: 'April 2025',
  image: 'https://source.unsplash.com/featured/?website,startup',
  excerpt: 'Scalability isn’t optional anymore. Learn how to plan your site for performance, SEO, and long-term growth.',
  category: 'Web Development'
}
</script>

<script setup lang="ts">
import BlogLayout from '../layout/BlogLayout.vue'
</script>

<template>
  <BlogLayout
    :title="blogMeta.title"
    :date="blogMeta.date"
    :image="blogMeta.image"
  >
    <p>
      In today’s fast-moving digital world, building a scalable website is not just a luxury — it’s essential.
    </p>

    <p>
      Here’s how we approach it at Tech Kri-Kri Oasis:
    </p>

    <ul>
      <li><strong>Vue + TailwindCSS:</strong> Rapid front-end development with clean, reusable components.</li>
      <li><strong>SEO from Day One:</strong> We set up semantic structure, metadata, and performance metrics early.</li>
      <li><strong>Mobile-First & Speed:</strong> We optimize for performance on every device, especially mobile.</li>
    </ul>

    <p>
      Want help launching a platform that can grow with your business?
      <router-link to="/contact" class="text-[#E85D04] font-semibold underline">Let’s talk.</router-link>
    </p>
  </BlogLayout>
</template>
