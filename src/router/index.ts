import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Services from '../views/ServicesPage.vue'
import Portfolio from '../views/PortfolioPage.vue'
import Contact from '../views/ContactPage.vue'
import Blog from '../views/BlogPage.vue'

// ✅ Corrected: Auto-import all blog post .vue files from components/blog/etc.
const blogPages = import.meta.glob('../components/blog/**/*.vue') 

// 🔄 Generate routes dynamically for blog pages
const blogRoutes: RouteRecordRaw[] = Object.keys(blogPages).map((path) => {
  const name = path.split('/').pop()?.replace('.vue', '') || 'post'
  return {
    path: `/blog/${name}`,
    name: `blog-${name}`,
    component: blogPages[path] as any
  }
})

// 📚 Full routes array
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/blog', name: 'Blog', component: Blog },
  ...blogRoutes
]

// 🚀 Create router with scroll-to-top
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
