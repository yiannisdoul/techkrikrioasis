<script lang="ts">
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'Data Doesn’t Lie: Why Melbourne Businesses Need Better Website Tracking in 2025',
  date: 'March 2025',
  image: 'https://assets.techkrikrioasis.com.au/blog/analytics-tracking-melbourne-2025.png',
  excerpt: 'Guesswork is expensive. Here’s how Melbourne businesses can use smart analytics and tracking to improve websites, campaigns, and customer journeys in 2025.',
  category: 'Marketing & Growth'
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
      <p><strong>Published:</strong> March 23rd, 2025</p>
      <p><strong>Category:</strong> Digital Strategy & Innovation</p>
    </div>

    <p>
      If you don’t know what’s working, you can’t improve it. But most Melbourne businesses are flying blind — launching websites and campaigns without real tracking in place.
    </p>

    <p>
      In 2025, data isn’t just for tech giants. Even local cafés, consultants, and service providers can (and should) use basic analytics to make smarter decisions.
    </p>

    <h2>🔍 What You Should Be Tracking</h2>

    <ul>
      <li><strong>Page views & bounce rate:</strong> What’s getting seen (and what’s being ignored)</li>
      <li><strong>Traffic sources:</strong> Are people finding you via Google, socials, or referrals?</li>
      <li><strong>Form conversions:</strong> What pages actually lead to enquiries or bookings?</li>
      <li><strong>Click paths:</strong> What do users do before they take action?</li>
    </ul>

    <h2>📈 Tools We Recommend (And Actually Use)</h2>

    <ul>
      <li><strong>Google Analytics 4:</strong> Free, powerful, and essential for any website</li>
      <li><strong>Hotjar:</strong> See heatmaps and user recordings for real UX insights</li>
      <li><strong>Google Tag Manager:</strong> Add tracking without messing with code</li>
      <li><strong>Meta Pixel / LinkedIn Insight Tag:</strong> Track ad performance</li>
    </ul>

    <h2>🎯 How We Use Data to Drive Decisions</h2>

    <p>
      At Tech Kri Kri Oasis, we don’t guess. We let the numbers guide:
    </p>

    <ul>
      <li>What page layouts convert best</li>
      <li>Where users are dropping off (and why)</li>
      <li>Which lead magnets or offers are working</li>
      <li>What needs to be fixed to improve load times or UX</li>
    </ul>

    <h2>📌 Final Thoughts</h2>

    <p>
      Every scroll, click, and form submission tells a story. You just need the tools to listen.
    </p>

    <p>
      At Tech Kri Kri Oasis, we help Melbourne businesses set up smart, lightweight tracking systems that translate data into results — without the jargon.  
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
