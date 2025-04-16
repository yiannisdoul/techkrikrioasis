<script lang="ts">
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'What Makes a Great Homepage in 2025? The Anatomy of High-Converting Sites for Melbourne Brands',
  date: 'March 2025',
  image: 'https://assets.techkrikrioasis.com.au/blog/great-homepage-structure-2025.png',
  excerpt: 'Your homepage is your first impression. Here’s how Melbourne businesses can structure a modern, conversion-ready homepage in 2025 — with clarity, trust, and action in mind.',
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
      <p><strong>Published:</strong> March 14th, 2025</p>
      <p><strong>Category:</strong> Web Design & UX</p>
    </div>

    <p>
      Your homepage is your storefront, pitch deck, and first impression — all in one. And in 2025, attention spans are even shorter. Visitors want instant clarity and instant trust.
    </p>

    <p>
      If you're a Melbourne business, your homepage needs to do more than just “look good.” It needs to guide the user through a smooth, logical, and persuasive journey.
    </p>

    <h2>🧠 The Psychology of First Impressions</h2>

    <p>
      Most visitors decide if your brand feels “right” within 5 seconds. That means:
    </p>

    <ul>
      <li>✔️ Clear messaging (what you do, who you help)</li>
      <li>✔️ Visual trust signals (logos, reviews, team photos)</li>
      <li>✔️ Obvious next step (book, explore, get started)</li>
    </ul>

    <h2>📐 The Ideal Homepage Structure (2025 Version)</h2>

    <ul>
      <li><strong>1. Hero Section:</strong> Clear headline + supporting subtext + CTA</li>
      <li><strong>2. Quick Value Proposition:</strong> Why you? Who do you help?</li>
      <li><strong>3. Services Preview:</strong> Icons or tiles linking to deeper pages</li>
      <li><strong>4. Testimonials / Case Studies:</strong> Show proof and client names</li>
      <li><strong>5. About / Vision Teaser:</strong> A glimpse into your team or story</li>
      <li><strong>6. Primary CTA:</strong> “Book a free call” or “Get started” section</li>
      <li><strong>7. Footer:</strong> Navigation, contact details, socials, legal</li>
    </ul>

    <h2>📱 Mobile-First Is Mandatory</h2>

    <p>
      Your homepage should be designed for the smallest screen first. That means:
    </p>

    <ul>
      <li>Touch-friendly buttons</li>
      <li>No cramped text or image overlaps</li>
      <li>Sticky CTA or nav bar for quick action</li>
    </ul>

    <h2>💡 Real Homepage Wins We’ve Built</h2>

    <p>
      For one local consultant, we restructured their homepage with better hierarchy and added a CTA in every scroll segment. Leads doubled within 6 weeks.
    </p>

    <p>
      For a Melbourne trade business, we simplified copy, swapped stock photos for real site images, and made their phone number sticky on mobile. Conversions jumped 38%.
    </p>

    <h2>📌 Final Thoughts</h2>

    <p>
      Your homepage shouldn’t be a brochure — it should be a journey. Each scroll should answer a question and move the user closer to action.
    </p>

    <p>
      At Tech Kri Kri Oasis, we help Melbourne businesses design homepages that connect, convert, and make the right first impression — fast.  
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
