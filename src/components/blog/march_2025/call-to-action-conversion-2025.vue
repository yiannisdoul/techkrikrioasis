<script lang="ts">
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'Call to Action, Not Confusion: How to Get More Website Leads with Better CTAs in 2025',
  date: 'March 2025',
  image: 'https://assets.techkrikrioasis.com.au/blog/call-to-action-conversion-2025.png',
  excerpt: 'If your website traffic isn’t turning into enquiries, your CTA might be to blame. Here’s how Melbourne brands can craft smarter, clearer calls to action in 2025.',
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
      <p><strong>Published:</strong> March 29th, 2025</p>
      <p><strong>Category:</strong> Web Design & UX</p>
    </div>

    <p>
      You could have the best design, great testimonials, and amazing services… but if your website doesn’t tell people what to do next — they’ll bounce.
    </p>

    <p>
      The solution? A clear, compelling CTA — Call to Action. In 2025, this tiny element is often the most important part of your website conversion flow.
    </p>

    <h2>🚩 Most CTAs Are Too Vague (or Too Pushy)</h2>

    <ul>
      <li>“Submit” — Submit what?</li>
      <li>“Click here” — Why?</li>
      <li>“Learn more” — About what?</li>
    </ul>

    <p>
      Your CTA should feel natural, action-oriented, and specific to your offer. And if it’s buried at the bottom of the page? You’re missing opportunities.
    </p>

    <h2>✅ What Makes a Great CTA in 2025</h2>

    <ul>
      <li><strong>1. Specific copy:</strong> “Book a discovery call”, “Get a custom quote”, “Download the free guide”</li>
      <li><strong>2. Visual hierarchy:</strong> Use contrast, spacing, and color to make it stand out</li>
      <li><strong>3. Placement:</strong> Don’t just use one. Use CTAs after every key section</li>
      <li><strong>4. Mobile UX:</strong> Sticky buttons, thumb-friendly sizing, no popups blocking the CTA</li>
    </ul>

    <h2>🎯 Button Copy That Works</h2>

    <p>
      Here are a few high-performing CTA examples we’ve used for Melbourne clients:
    </p>

    <ul>
      <li>📞 “Book Your Free Strategy Call”</li>
      <li>💬 “Let’s Talk About Your Project”</li>
      <li>🧾 “View Our Packages & Pricing”</li>
      <li>🎯 “Start My Website Quote”</li>
    </ul>

    <p>
      The best CTAs speak directly to what the user wants next — not what you want them to do.
    </p>

    <h2>🔧 CTA Strategy at Tech Kri Kri Oasis</h2>

    <ul>
      <li>We A/B test CTA placement and copy across service pages</li>
      <li>Use scroll-triggered animations to reveal CTAs at the right time</li>
      <li>Design CTAs for mobile-first interaction</li>
      <li>Match CTA tone to your brand personality (friendly vs formal, bold vs subtle)</li>
    </ul>

    <h2>📌 Final Thoughts</h2>

    <p>
      A great CTA doesn’t just ask for action — it makes taking action feel easy, relevant, and rewarding.
    </p>

    <p>
      At Tech Kri Kri Oasis, we help Melbourne brands design websites that guide, convert, and close — starting with the perfect CTA.  
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
