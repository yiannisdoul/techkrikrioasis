<script lang="ts">
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'How to Build a Scalable Website for Your Startup',
  date: 'March 2025',
  image: 'https://source.unsplash.com/featured/?website,startup',
  excerpt: 'Scalability isn’t optional anymore. Learn how to plan your site for performance, SEO, and long-term growth.',
  category: 'Web Design & UX'
}
</script>

<script setup lang="ts">
import BlogLayout from '@/components/layout/BlogLayout.vue'
</script>

<template>
  <BlogLayout
    :title="blogMeta.title"
    :date="blogMeta.date"
    :image="blogMeta.image"
  >
    <div class="article-meta">
      <p><strong>Author:</strong> Editorial Team, Tech Kri Kri Oasis</p>
      <p><strong>Published:</strong> March 3rd, 2025</p>
      <p><strong>Category:</strong> Web Development</p>
    </div>

    <p>
      In today’s digital-first world, a startup’s website isn’t just a brochure — it’s the backbone of your business. If you plan to scale, you need a website that can scale with you.
    </p>

    <p>
      Scalability isn’t just about handling traffic — it’s about performance, flexibility, and long-term growth. Here’s how we approach building scalable websites at Tech Kri Kri Oasis.
    </p>

    <h2>🧱 Our Tech Stack for Scalable Frontends</h2>

    <ul>
      <li><strong>Vue 3 + TailwindCSS:</strong> Lightweight, modular, and built for modern reactive interfaces.</li>
      <li><strong>Reusable Components:</strong> Keep code DRY, clean, and scalable across pages and features.</li>
      <li><strong>Global Design Tokens:</strong> Ensure visual consistency and quick theming at scale.</li>
    </ul>

    <h2>🔍 SEO + Performance From Day One</h2>

    <ul>
      <li><strong>Semantic HTML5 structure</strong> for accessibility and search engines</li>
      <li><strong>Meta tags and Open Graph data</strong> set during the build, not after</li>
      <li><strong>Image compression + lazy loading</strong> to maximise speed and Core Web Vitals</li>
    </ul>

    <h2>📱 Mobile-First + Device Flexibility</h2>

    <p>
      With over 70% of traffic coming from phones, we ensure every layout is:
    </p>

    <ul>
      <li>Responsive from the smallest screen upward</li>
      <li>Touch-optimized with readable buttons and scroll behaviour</li>
      <li>Fast-loading and memory-efficient</li>
    </ul>

    <h2>🚀 Designed to Grow With You</h2>

    <p>
      A scalable site isn’t static — it’s built to evolve. That’s why we:
    </p>

    <ul>
      <li>Use modular page structures for new content</li>
      <li>Support future integration with CRMs, booking tools, and portals</li>
      <li>Keep the backend flexible (WordPress, Strapi, or headless options)</li>
    </ul>

    <h2>📌 Final Thoughts</h2>

    <p>
      Startups need websites that work now — and adapt for tomorrow. From day one, your tech stack should support growth, not slow it down.
    </p>

    <p>
      At Tech Kri Kri Oasis, we help fast-moving founders and digital-first brands build the kind of websites that scale with their ambitions.  
      Book a free call.
    </p>
  </BlogLayout>
</template>

<style scoped>
.article-meta {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

h2 {
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;
}

ul {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  list-style-type: disc;
}

p {
  margin-bottom: 1.5rem;
  font-size: 1.07rem;
  line-height: 1.8;
}
</style>
