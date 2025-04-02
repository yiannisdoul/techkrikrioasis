<script lang="ts">
// ✅ Define the type for this blog's metadata
export type BlogMeta = {
  title: string
  date: string
  image: string
  excerpt: string
  category: string
}

// ✅ Export your blog post's metadata here
export const blogMeta: BlogMeta = {
  title: 'Your Blog Post Title Here', // 📝 Post title (used on cards, meta, etc)
  date: 'April 2025',                 // 📅 Month + year (used for sorting)
  image: 'https://source.unsplash.com/featured/?keyword', // 🖼️ Featured image URL
  excerpt: 'A short 1–2 sentence teaser of what your article is about...', // 🧠 Used on cards
  category: 'Your Category' // 📂 Used for filtering (e.g., SEO, Design, Strategy)
}
</script>

<script setup lang="ts">
// ✅ Import your BlogLayout
import BlogLayout from '../layout/BlogLayout.vue'
</script>

<template>
  <!-- 🔽 Blog content goes inside the BlogLayout wrapper -->
  <BlogLayout
    :title="blogMeta.title"
    :date="blogMeta.date"
    :image="blogMeta.image"
  >
    <!-- ✍️ Start writing your blog content below -->

    <p>
      Start your blog introduction here. You can write as many paragraphs as needed.
      Keep it conversational and valuable for your readers.
    </p>

    <h2>🧠 Section Title</h2>
    <p>
      Describe the section in detail. Share examples, lists, or experiences.
    </p>

    <ul>
      <li><strong>Point 1:</strong> Describe the idea.</li>
      <li><strong>Point 2:</strong> Explain the benefit.</li>
      <li><strong>Point 3:</strong> Add a tip or link.</li>
    </ul>

    <h2>📌 Final Thoughts</h2>
    <p>
      Wrap up your blog post with a CTA or reflection. Need help with this topic?
      <router-link to="/contact" class="text-[#E85D04] font-semibold underline">Let’s talk.</router-link>
    </p>

    <!-- ✅ Done! You can now copy this file and write each blog using it. -->
  </BlogLayout>
</template>
