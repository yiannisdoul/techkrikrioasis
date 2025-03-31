import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/MainPage.vue';
import About from '../views/AboutPage.vue';
import Services from '../views/ServicesPage.vue';
import Portfolio from '../views/PortfolioPage.vue';
import Contact from '../views/ContactPage.vue';
import Blog from '../views/BlogPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/blog', name: 'Blog', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
