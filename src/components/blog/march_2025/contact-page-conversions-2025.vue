<script lang="ts">
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'Why Your Contact Page Is Costing You Leads in 2025 (And How to Fix It)',
  date: 'March 2025',
  image: 'https://assets.techkrikrioasis.com.au/blog/contact-page-conversions-2025.webp',
  excerpt: 'If your Contact page is just an afterthought, it’s likely losing you business. Here’s how Melbourne companies can design smarter, higher-converting forms in 2025.',
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
      <p><strong>Published:</strong> March 20th, 2025</p>
      <p><strong>Category:</strong> Web Design & UX</p>
    </div>

    <p>
      Let’s be honest — most Contact pages are terrible. A one-line heading, a generic form, and maybe an address if you're lucky.
    </p>

    <p>
      But in 2025, your Contact page is one of the most important parts of your website. It’s where interest becomes action. Yet most businesses treat it like an afterthought.
    </p>

    <h2>🚫 Common Contact Page Mistakes</h2>

    <ul>
      <li>No headline or explanation</li>
      <li>Forms that ask for too much info</li>
      <li>Missing confirmation messaging or email follow-up</li>
      <li>No alternative contact options (email, phone, chat)</li>
      <li>No trust signals: no team photos, testimonials, or hours</li>
    </ul>

    <h2>📬 What a High-Converting Contact Page Includes</h2>

    <ul>
      <li><strong>Clear, reassuring heading:</strong> Let them know they’re in the right place</li>
      <li><strong>Short form with logic:</strong> Name, email, message — that’s enough</li>
      <li><strong>Phone number + email visible:</strong> For trust and quick contact</li>
      <li><strong>Social proof or badge:</strong> Testimonials, Google rating, or a “trusted by” bar</li>
      <li><strong>Follow-up message:</strong> “We’ll respond within 24 hours” builds confidence</li>
    </ul>

    <h2>📱 Bonus: Make It Mobile-First</h2>

    <p>
      On mobile, your Contact page should:
    </p>

    <ul>
      <li>Use large touch-friendly fields</li>
      <li>Auto-scroll to confirmation message after submit</li>
      <li>Include click-to-call and map integration</li>
    </ul>

    <h2>🔧 What We Build at Tech Kri Kri Oasis</h2>

    <ul>
      <li>Smart forms with conditional fields</li>
      <li>Sticky or floating CTA buttons on mobile</li>
      <li>Google Maps embed + structured data for local SEO</li>
      <li>Zapier or CRM integration to automate follow-up</li>
    </ul>

    <h2>📌 Final Thoughts</h2>

    <p>
      You’ve worked hard to earn a visitor’s trust. Don’t lose them at the finish line.
    </p>

    <p>
      At Tech Kri Kri Oasis, we help Melbourne brands turn boring Contact pages into high-performing lead gen assets — simple, fast, and conversion-focused.  
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
