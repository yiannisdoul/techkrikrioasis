export type PackageCategory = { name: string; icon: string; items: string[] }

export type Package = {
  key: 'Starter' | 'Growth' | 'Pro' | 'ScaleUp' | 'Enterprise'
  title: string
  price: string
  value: string
  categories: PackageCategory[]
}

export const packages: Package[] = [
  {
    key: 'Starter',
    title: '🟡 Starter',
    price: '$2,500 AUD',
    value: '~$4,050 AUD',
    categories: [
      { name: 'Website Development', icon: '🌐', items: ['Theme-based WordPress site (5 pages)'] },
      { name: 'Branding Essentials', icon: '🎨', items: ['Logo, color palette, social banners'] },
      { name: 'Domain & Email', icon: '📧', items: ['Domain registration + 1 professional email'] },
      { name: 'Google Setup', icon: '📈', items: ['Google Business Profile + Analytics'] },
      { name: 'SEO Metadata', icon: '✍️', items: ['Meta titles + page-level SEO'] },
      { name: 'Social Kit', icon: '📱', items: ['3–5 branded social post graphics'] },
      { name: 'Strategy Call', icon: '🧠', items: ['1 x 30-min strategy session'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone Mini Shoot'] }
    ]
  },
  {
    key: 'Growth',
    title: '🟠 Growth',
    price: '$5,000 AUD',
    value: '~$8,500 AUD',
    categories: [
      { name: 'Website Development', icon: '🌐', items: ['6–8 page WordPress site (Divi)'] },
      { name: 'E-Commerce Setup', icon: '🛒', items: ['Up to 20 products with checkout'] },
      { name: 'Branding Pack', icon: '🎨', items: ['Logo, style guide, usage doc'] },
      { name: 'Copywriting', icon: '✍️', items: ['Home, About, Services'] },
      { name: 'SEO', icon: '📈', items: ['On-page SEO for 5 keywords'] },
      { name: 'Email Automation', icon: '💬', items: ['Mailchimp/Brevo starter sequence'] },
      { name: 'Social Kit', icon: '📱', items: ['5 branded graphics'] },
      { name: 'Strategy Call', icon: '🧠', items: ['1 x 1-hour session'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone Mini Shoot'] }
    ]
  },
  {
    key: 'Pro',
    title: '🔵 Pro',
    price: '$10,000 AUD',
    value: '~$17,500 AUD',
    categories: [
      { name: 'Custom Website', icon: '🌐', items: ['10–12 page custom design'] },
      { name: 'Mobile App', icon: '📱', items: ['Hybrid app (up to 7 screens)'] },
      { name: 'Brand Identity', icon: '🎨', items: ['Brand kit + tone of voice'] },
      { name: 'Copywriting', icon: '✍️', items: ['Pages, blog post, funnel copy'] },
      { name: 'SEO & Structure', icon: '📈', items: ['10+ keyword optimization'] },
      { name: 'CRM + Automation', icon: '💬', items: ['CRM integrations + flows'] },
      { name: 'Analytics', icon: '📊', items: ['GA4, Meta Pixel, Tag Manager'] },
      { name: 'Social Kit', icon: '📸', items: ['10 branded graphics/templates'] },
      { name: 'Strategy Call', icon: '🧠', items: ['2 x 1-hour sessions'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone shoot + basic edit'] }
    ]
  },
  {
    key: 'ScaleUp',
    title: '🟣 Scale-Up',
    price: '$25,000 AUD',
    value: '~$38,000 AUD',
    categories: [
      { name: 'Custom Platform', icon: '🌐', items: ['Web app, dashboard or portal'] },
      { name: 'Mobile App', icon: '📱', items: ['Native or hybrid (8–10 screens)'] },
      { name: 'E-Commerce Advanced', icon: '🛒', items: ['Subscriptions, accounts, POS'] },
      { name: 'Branding + Copy', icon: '🎨', items: ['Voice, visuals, story'] },
      { name: 'SEO + Funnel', icon: '📈', items: ['Blog system + conversion path'] },
      { name: 'CRM & Flows', icon: '💬', items: ['Automated journeys + CRM'] },
      { name: 'Admin UI', icon: '📊', items: ['CMS dashboard + analytics'] },
      { name: 'Strategy Calls', icon: '🧠', items: ['4 x 1-hr sessions (monthly)'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone + promo video cut'] }
    ]
  },
  {
    key: 'Enterprise',
    title: '🔴 Enterprise',
    price: '$50,000+ AUD',
    value: '~$70,000+ AUD',
    categories: [
      { name: 'Infrastructure', icon: '🌐', items: ['Web platform, internal tool, SaaS'] },
      { name: 'Advanced App', icon: '📱', items: ['Cross-platform, APIs, integrations'] },
      { name: 'Global SEO', icon: '📈', items: ['Multilingual, international targeting'] },
      { name: 'AI Dashboards', icon: '🤖', items: ['Analytics, BI, funnel events'] },
      { name: 'API Integrations', icon: '🔗', items: ['CRM, Payments, Databases'] },
      { name: 'LMS / Portal', icon: '🎓', items: ['Learning management system'] },
      { name: 'Brand System', icon: '🎨', items: ['Internal + external assets'] },
      { name: 'Strategy Calls', icon: '🧠', items: ['12 x weekly 1-hr sessions'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone or premium video asset'] }
    ]
  }
]
