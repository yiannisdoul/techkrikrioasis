import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const app = createApp(App);
app.use(router);
app.mount('#app');


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
