<script lang="ts">
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

export const blogMeta: BlogMeta = {
  title: 'Top AI Design Tools to Watch in 2025',
  date: 'March 2025',
  image: 'https://source.unsplash.com/featured/?ai,design',
  excerpt: 'AI is transforming design. Here are the top tools revolutionizing UX/UI in 2025...',
  category: 'Digital Strategy & Automation'
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
      <p><strong>Published:</strong> March 12th, 2025</p>
      <p><strong>Category:</strong> AI & Design</p>
    </div>

    <p>
      The design world is evolving faster than ever, thanks to breakthroughs in artificial intelligence. In 2025,
      AI tools are changing how we prototype, test, and ship user experiences — faster and smarter than before.
    </p>

    <h2>✨ Top AI Design Tools Making Waves</h2>

    <ul>
      <li><strong>🧠 Uizard:</strong> Instantly convert hand-drawn wireframes or text prompts into clickable prototypes.</li>
      <li><strong>🎨 Khroma:</strong> AI-powered color palette generation that learns your personal taste and brand tone.</li>
      <li><strong>⚡ Framer AI:</strong> Auto-build responsive layouts using nothing but descriptive copy.</li>
      <li><strong>📐 Galileo AI:</strong> Generate polished UI components and layouts from simple design briefs.</li>
      <li><strong>🧰 Diagram (by Figma):</strong> Intelligent design assistants for speeding up UI tasks inside Figma.</li>
    </ul>

    <h2>🚀 Why This Matters for Melbourne Businesses</h2>

    <p>
      These tools aren’t just shiny toys — they’re productivity multipliers. If you’re running a lean startup or managing
      a fast-growing brand, AI-assisted design means:
    </p>

    <ul>
      <li>✅ Faster design sprints and prototyping</li>
      <li>✅ Lower development costs for MVPs</li>
      <li>✅ Consistent visual systems, even with smaller teams</li>
      <li>✅ Better collaboration between designers and developers</li>
    </ul>

    <h2>🔧 How We Use AI in Our Workflow</h2>

    <p>
      At Tech Kri Kri Oasis, we’re already integrating AI into our UI/UX and branding process. From wireframe validation to color testing,
      these tools help us move faster without sacrificing creativity or quality.
    </p>

    <p>
      That doesn’t mean replacing designers — it means empowering them with smarter tools to focus on strategy, storytelling, and human-centered design.
    </p>

    <h2>📌 Final Thoughts</h2>

    <p>
      AI won’t replace designers — but designers who use AI will absolutely outperform those who don’t.
    </p>

    <p>
      Want to explore what AI-powered design could look like for your Melbourne business?  
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
