<script lang="ts">
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'Speed Matters: How to Make Your Melbourne Business Website Load Faster in 2025',
  date: 'March 2025',
  image: 'https://assets.techkrikrioasis.com.au/blog/website-speed-boost-2025.png',
  excerpt: 'Site speed directly impacts rankings, bounce rate, and conversions. Here’s how Melbourne businesses can fix slow websites in 2025 — and stop losing leads.',
  category: 'SEO & Search Strategy'
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
      <p><strong>Published:</strong> March 17th, 2025</p>
      <p><strong>Category:</strong> SEO & Search Strategy</p>
    </div>

    <p>
      Slow websites cost you traffic, leads, and credibility. In 2025, Melbourne businesses can’t afford to ignore speed — especially as Google continues prioritising performance in its ranking algorithm.
    </p>

    <p>
      Whether you're on WordPress, Shopify, or a custom CMS, there are clear actions you can take to load faster — and convert better.
    </p>

    <h2>🚨 Why Website Speed Matters More Than Ever</h2>

    <ul>
      <li><strong>SEO:</strong> Page speed is a core ranking factor for Google, especially on mobile</li>
      <li><strong>UX:</strong> 1 in 2 users bounce if your site takes longer than 3 seconds to load</li>
      <li><strong>Conversions:</strong> Amazon found every 100ms delay could reduce sales by 1%</li>
    </ul>

    <h2>🛠️ 7 Ways to Make Your Site Faster</h2>

    <ul>
      <li><strong>1. Optimise Images:</strong> Compress and resize — don’t upload 5MB hero banners</li>
      <li><strong>2. Use a CDN:</strong> Content Delivery Networks reduce latency for Aussie visitors</li>
      <li><strong>3. Minify Scripts:</strong> Combine and compress your CSS and JavaScript files</li>
      <li><strong>4. Lazy Load:</strong> Only load content when it enters the viewport</li>
      <li><strong>5. Reduce Plugins:</strong> Especially on WordPress — delete what you don’t use</li>
      <li><strong>6. Choose Better Hosting:</strong> Shared servers = shared speed problems</li>
      <li><strong>7. Audit with Lighthouse or GTmetrix:</strong> Find bottlenecks and track progress</li>
    </ul>

    <h2>📱 Don’t Forget Mobile</h2>

    <p>
      Many Melbourne businesses optimise for desktop… and forget that 70–80% of users are on phones. Make sure:
    </p>

    <ul>
      <li>Your mobile layout doesn’t load hidden (but huge) images</li>
      <li>Your fonts and buttons are clean and readable</li>
      <li>Core Web Vitals pass across all devices</li>
    </ul>

    <h2>🔧 What We Do at Tech Kri Kri Oasis</h2>

    <ul>
      <li>Custom image pipelines + automatic compression</li>
      <li>Global CDN and fast Australian hosting</li>
      <li>Site audits with performance score goals</li>
      <li>Theme and plugin stripping to remove bloat</li>
      <li>Conversion-optimised redesigns — speed meets UX</li>
    </ul>

    <h2>📌 Final Thoughts</h2>

    <p>
      Speed is no longer optional. If your website feels slow, users won’t wait — they’ll bounce.
    </p>

    <p>
      At Tech Kri Kri Oasis, we help Melbourne brands turn sluggish websites into lightning-fast sales machines.  
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
