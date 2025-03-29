import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/MainPage.vue';
import About from '../views/AboutPage.vue';
import Services from '../views/ServicesPage.vue';
import Pricing from '../views/PricingPage.vue';
import Contact from '../views/ContactPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/contact', name: 'Contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
