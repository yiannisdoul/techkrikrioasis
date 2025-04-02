<script lang="ts">
// ✅ Define the type for metadata
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

// ✅ Export the blog metadata with type safety
export const blogMeta: BlogMeta = {
  title: 'Top AI Design Tools to Watch in 2025',
  date: 'April 2025',
  image: 'https://source.unsplash.com/featured/?ai,design',
  excerpt: 'AI is transforming design. Here are the top tools revolutionizing UX/UI in 2025...',
  category: 'AI & Design'
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
      AI is transforming design faster than ever. In 2025, these tools are leading the pack in UI/UX innovation,
      automation, and content generation.
    </p>

    <h2>✨ Tools to Watch</h2>
    <ul>
      <li><strong>Uizard:</strong> Turn wireframes into working prototypes with AI.</li>
      <li><strong>Khroma:</strong> Generate color palettes based on your preferences.</li>
      <li><strong>Framer AI:</strong> Auto-generate responsive layouts from text input.</li>
    </ul>

    <p>
      At Tech Kri-Kri Oasis, we’re already integrating these tools into our workflow to stay ahead of the curve.
      Need help with AI-powered design?
      <router-link to="/contact" class="text-[#E85D04]">Let’s talk.</router-link>
    </p>
  </BlogLayout>
</template>
