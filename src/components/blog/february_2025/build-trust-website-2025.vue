<script lang="ts">
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'How to Build Trust With Your Website in 5 Seconds (Melbourne Edition, 2025)',
  date: 'February 2025',
  image: 'https://assets.techkrikrioasis.com.au/blog/build-trust-website-2025.png', 
  excerpt: 'Your website has five seconds to make a strong first impression. In 2025, Melbourne customers judge credibility fast. Here’s how to build trust instantly — and why most businesses fail.',
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
      <p><strong>Published:</strong> February 25th, 2025</p>
      <p><strong>Category:</strong> Web Design & UX</p>
    </div>

    <p>
      It happens fast. Someone lands on your website — and within five seconds, they’ve already made a decision. “Can I trust this business? Does this look legit? Should I stick around?”
    </p>

    <p>
      In 2025, trust is everything online. With so much noise, spam, and digital fatigue, your site needs to pass that gut-check instantly — especially in competitive local markets like Melbourne.
    </p>

    <h2>🧠 First Impressions Are Visual, Not Verbal</h2>

    <p>
      Users don’t read first. They glance. So your design, spacing, and layout matter more than clever copy (at least initially).
    </p>

    <ul>
      <li><strong>Clean structure:</strong> Avoid clutter. Embrace white space.</li>
      <li><strong>Brand consistency:</strong> Use your colours, logo, and font system correctly.</li>
      <li><strong>Mobile optimization:</strong> If it loads awkwardly or cuts off content — it’s an instant exit.</li>
      <li><strong>Fast loading:</strong> Trust drops by 30–40% if your site takes more than 3 seconds to load.</li>
    </ul>

    <h2>🔍 The 5-Second Trust Checklist</h2>

    <p>
      Here’s what most Melbourne users look for (consciously or not) in their first few seconds:
    </p>

    <ul>
      <li>✅ A professional logo and clear navigation</li>
      <li>✅ A headline that speaks to them — not about you</li>
      <li>✅ High-quality images or video (bonus if it's local or team-based)</li>
      <li>✅ A visible phone number, live chat, or contact CTA</li>
      <li>✅ Trust signals: reviews, certifications, partner logos, testimonials</li>
    </ul>

    <h2>🎯 Your Hero Section Does the Heavy Lifting</h2>

    <p>
      The first full-screen area someone sees should:
    </p>

    <ul>
      <li>State your offer clearly (“Custom Web Design for Melbourne Startups”)</li>
      <li>Include a primary CTA (“Book a Free Call” or “View Our Work”)</li>
      <li>Show who you are or who you help (with an image that feels real)</li>
    </ul>

    <p>
      If your hero section misses, the rest of your site may never be seen.
    </p>

    <h2>💬 Real Trust Builders We Use at Tech Kri Kri Oasis</h2>

    <ul>
      <li>Show your face — personal brands or team photos always outperform stock</li>
      <li>Include client or partner logos right after the hero section</li>
      <li>Add a short line about your experience or Melbourne roots</li>
      <li>Feature a review carousel early on the page</li>
    </ul>

    <h2>📌 Final Thoughts</h2>

    <p>
      People don’t buy what they don’t trust. And online, trust is built (or lost) in seconds — not minutes.
    </p>

    <p>
      At Tech Kri Kri Oasis, we help Melbourne businesses design websites that look amazing, load fast, and build trust the moment someone lands.  
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
