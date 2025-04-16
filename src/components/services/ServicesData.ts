// src/components/services/ServicesData.ts

import webDevIcon from 'https://assets.techkrikrioasis.com.au/icons/web-dev.png'
import mobileAppIcon from 'https://assets.techkrikrioasis.com.au/icons/mobile-app.png'
import ecommerceIcon from 'https://assets.techkrikrioasis.com.au/icons/ecommerce.png'
import seoIcon from 'https://assets.techkrikrioasis.com.au/icons/seo.png'
import digitalMarketingIcon from 'https://assets.techkrikrioasis.com.au/icons/digital-marketing.png'
import dronePhotographyIcon from 'https://assets.techkrikrioasis.com.au/icons/drone-photography.png'
import graphicDesignIcon from 'https://assets.techkrikrioasis.com.au/icons/graphic-design.png'
import strategyConsultingIcon from 'https://assets.techkrikrioasis.com.au/icons/wstrategy-consulting.png'

export const services = [
  {
    title: 'Mobile App Development',
    icon: mobileAppIcon,
    description: 'Android & iOS apps built for startups and businesses.',
    tiers: [
      {
        name: 'Essential',
        headline: '👉 Great for MVPs or quick launches',
        features: [
          '🚀 iOS or Android · 3–5 Screens',
          '✅ Simple brochure-style or internal tools',
          ,
        ],
      },
      {
        name: 'Enhanced',
        headline: '👉 Ideal for scaling products or marketplaces',
        features: [
          '📲 Cross-Platform · API Integrations',
          '✅ Secure login, form data, notifications',
        ],
      },
      {
        name: 'Elite',
        headline: '👉 Built for funded startups or high-volume platforms', 
        features: [
          '🛠️ Backend + Admin CMS · Store Support',
          '✅ Feature-rich, scalable apps',       
        ],
      },
    ],
  },
  {
    title: 'Web Development',
    icon: webDevIcon,
    description: 'Custom websites built with WordPress or code from scratch.',
    tiers: [
      {
        name: 'Essential',
        headline: '👉 Perfect for simple service-based businesses', 
        features: [
          '🧱 WordPress Theme · 3–5 Pages',
          '✅ Contact form, service info, mobile-ready', 
        ],
      },
      {
        name: 'Enhanced',
        headline: '👉 Great for growing startups and local pros', 
        features: [
          '🖼️ Custom Branding · 6–8 Pages',
          '✅ Blog, basic SEO, appointment integration', 
        ],
      },
      {
        name: 'Elite',
        headline: '👉 Ideal for scaling businesses or serious online presence', 
        features: [
          '🎨 Custom Code · 10+ Pages + CRM',
          '✅ Animations, custom forms, performance boost', 
        ],
      },
    ],
  },
  {
    title: 'E-Commerce',
    icon: ecommerceIcon,
    description: 'Online stores that convert, on Shopify, WooCommerce, or custom.',
    tiers: [
      {
        name: 'Essential',
        headline: '👉 Great for testing a product idea', 
        features: [
          '🛍️ Shopify/Woo · 10–15 Products',
          '✅ Basic cart, categories, policy pages',  
        ],
      },
      {
        name: 'Enhanced',
        headline: '👉 Ideal for niche brands or online retailers', 
        features: [
          '🛒 Conversion Funnels · 30–50 Products',
          '✅ Email flows, sales pages, upsells',
        ],
      },
      {
        name: 'Elite',
        headline: '👉 Built for serious sellers or wholesalers',   
        features: [
          '🏬 Custom eCom + Integrations',
          '✅ Subscriptions, analytics, CRM & POS',  
        ],
      },
    ],
  },
  {
    title: 'SEO',
    icon: seoIcon,
    description: 'Rank your website locally and nationally with smart SEO.',
    tiers: [
      {
        name: 'Essential',
        headline: '👉 Great for new websites or local reach', 
        features: [
          '🔍 3–5 Keywords · Site Audit',
          '✅ Google Business, blog setup',
        ],
      },
      {
        name: 'Enhanced',
        headline: '👉 Ideal for ranking across your region or niche',  
        features: [
          '📈 10+ Keywords · On-page + Backlinks',
          '✅ Google Ads basics, content strategy',
        ],
      },
      {
        name: 'Elite',
        headline: '👉 Best for agencies, franchises, or scaling brands',   
        features: [
          '🚀 Full Funnel Strategy · Paid Ads',
          '✅ National campaigns, CRO, lead capture',
        ],
      },
    ],
  },
  {
    title: 'Digital Marketing',
    icon: digitalMarketingIcon,
    description: 'We drive traffic with smart Google Ads and Meta campaigns.',
    tiers: [
      {
        name: 'Essential',
        headline: '👉 Good for single campaign launches', 
        features: [
          '📢 Meta or Google Ads · 1 Creative',
          '✅ Landing page + ad integration',
        ],
      },
      {
        name: 'Enhanced',
        headline: '👉 Great for monthly lead generation', 
        features: [
          '📊 Google + Meta · Retargeting',
          '✅ Funnel setup, content calendar',
        ],
      },
      {
        name: 'Elite',
        headline: '👉 Designed for brands ready to scale', 
        features: [
          '🎯 Omnichannel Strategy + Automation',
          '✅ A/B testing, video ads, CRM funnels',   
        ],
      },
    ],
  },
  {
    title: 'Drone Photography (Only in Melbourne)',
    icon: dronePhotographyIcon,
    description: 'Capture property or events with stunning drone shots.',
    tiers: [
      {
        name: 'Essential',
        headline: '👉 Great for property listings or small events', 
        features: [
          '🚁 30 Min · 5 Photos + 1 Clip',
          '✅ 1080p footage + licensing',
        ],
      },
      {
        name: 'Enhanced',
        headline: '👉 Perfect for Airbnb, venues, brands', 
        features: [
          '📷 Multi-location · Promo Edit',
          '✅ 4K drone video + music',
        ],
      },
      {
        name: 'Elite',
        headline: '👉 Ideal for high-end real estate, ads, or films', 
        features: [
          '🎥 Full Day · Cinematic Edits',
          '✅ Drone + DSLR · Full promo bundle',
        ],
      },
    ],
  },
  {
    title: 'Graphic Design',
    icon: graphicDesignIcon,
    description: 'Visuals that speak your brand: logos, kits & more.',
    tiers: [
      {
        name: 'Essential',
        headline: '👉 Great for new startups or solo brands', 
        features: [
          '🎨 Logo · Colors · Fonts',
          '✅ Print-ready, favicon & PNGs',
        ],
      },
      {
        name: 'Enhanced',
        headline: '👉 Ideal for marketing-ready brand visuals', 
        features: [
          '🖌️ Social Templates + Brand Kit',
          '✅ Deck design, posts, cover art',
        ],
      },
      {
        name: 'Elite',
        headline: '👉 Best for funded startups or rebrands', 
        features: [
          '📘 Full Brand Book + Media Kit',
          '✅ Story, tone, guidelines, print/web design',
        ],
      },
    ],
  },
  {
    title: 'Strategy & Consulting',
    icon: strategyConsultingIcon,
    description: 'Business & tech consulting with ROI-first mindset.',
    tiers: [
      {
        name: 'Essential',
        headline: '👉 Great for solopreneurs or early advice', 
        features: [
          '💼 1x 60–90 Min Zoom',
          '✅ Tech, brand, or funnel audit',
        ],
      },
      {
        name: 'Enhanced',
        headline: '👉 Ideal for pivots or preparing to hire', 
        features: [
          '📊 Business Model + 1-Week Advisory',
          '✅ Competitor research, next steps',
        ],
      },
      {
        name: 'Elite',
        headline: '👉 Best for serious founders or funded startups', 
        features: [
          '🧠 1 Month Block · Weekly Support',
          '✅ Systems, hiring, monetization, roadmap',
        ],
      },
    ],
  },
]
