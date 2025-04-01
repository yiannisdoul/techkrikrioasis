<!-- src/pages/BlogPage.vue -->
<template>
    <div class="pt-24 px-6 md:px-12 lg:px-20 pb-16">
      <h1 class="text-4xl font-bold text-[var(--primary-color)] mb-6">Latest Blog Posts</h1>
      <p class="text-gray-600 max-w-2xl mb-10">
        Insights, tutorials, and case studies from the Tech Kri-Kri Oasis team.
      </p>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard
          v-for="post in posts"
          :key="post.slug"
          :title="post.title"
          :excerpt="post.excerpt"
          :slug="post.slug"
          :date="post.date"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import BlogCard from '../components/blog/BlogCard.vue'
  
  const posts = [
    {
      title: 'How to Build a Scalable Website for Your Startup',
      excerpt: 'Learn the key steps to launch a conversion-optimized, scalable business website with Vue, Tailwind, and SEO fundamentals.',
      slug: 'scalable-startup-website',
      date: 'April 2025',
    },
    {
      title: 'Top 5 SEO Mistakes Small Businesses Make',
      excerpt: 'These common SEO errors could be tanking your traffic. Learn how to fix them and improve your Google rankings.',
      slug: 'common-seo-mistakes',
      date: 'March 2025',
    },
    {
      title: 'Why Mobile Responsiveness is Non-Negotiable in 2025',
      excerpt: 'Your users are mobile-first. Learn how to make sure your site is ready across all devices with best practices.',
      slug: 'mobile-responsive-sites',
      date: 'February 2025',
    },
  ]
  </script>
  