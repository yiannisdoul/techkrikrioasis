import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Import Pinia
import App from './App.vue';
import router from './router';

import './style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
  duration: 800,
  once: true
})

import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);

// Initialize Pinia
const pinia = createPinia();
app.use(pinia);

app.use(router);
app.use(MotionPlugin);

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faXTwitter, faLinkedin, faInstagram);

app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app after all plugins are registered
app.mount('#app');