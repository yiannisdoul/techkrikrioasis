export type PackageCategory = { name: string; icon: string; items: string[] }

export type Package = {
  key: 'Starter' | 'Growth' | 'Pro' | 'ScaleUp' | 'Enterprise'
  title: string
  price: string
  value: string
  subtitle: string
  categories: PackageCategory[]
}

export const packages: Package[] = [
  {
    key: 'Starter',
    title: '🟡 Starter',
    price: '$2,500 AUD',
    value: '~$4,050 AUD',
    subtitle: 'Entry Package',
    categories: [
      { name: 'Website Development', icon: '🌐', items: ['Theme-based WordPress site (5 pages)'] },
      { name: 'Brand Identity', icon: '🎨', items: ['Logo, color palette, social banners'] },
      { name: 'Domain & Email Setup', icon: '📧', items: ['Domain registration + 1 professional email'] },
      { name: 'SEO Setup', icon: '📈', items: ['Meta titles + basic page SEO'] },
      { name: 'Social Kit', icon: '📱', items: ['3–5 branded social post graphics'] },
      { name: 'Google Tools', icon: '📊', items: ['Google Business Profile + Analytics setup'] },
      { name: 'Strategy Session', icon: '🧠', items: ['1 x 30-min strategy call'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone Mini Shoot'] }
    ]
  },
  {
    key: 'Growth',
    title: '🟠 Growth',
    price: '$5,000 AUD',
    value: '~$8,500 AUD',
    subtitle: 'Includes Starter +',
    categories: [
      { name: 'Website Development', icon: '🌐', items: [
        'Includes: WordPress site (5p)',
        '➔ Wordpress site (6–8 pages)'
      ]},
      { name: 'Brand Identity', icon: '🎨', items: [
        'Includes: Logo, color palette, social banners',
        '➔ Brand style guide'
      ]},
      { name: 'Domain & Email Setup', icon: '📧', items: ['Domain registration + 1 professional email'] },
      { name: 'SEO Setup', icon: '📈', items: [
        'Includes: Basic SEO setup',
        '➔ On-page SEO for 5 keywords'
      ]},
      { name: 'Social Kit', icon: '📱', items: [
        'Includes: 3–5 branded social posts',
        '➔ 5 branded graphics'
      ]},
      { name: 'Google Tools', icon: '📊', items: ['Google Business Profile + Analytics setup'] },
      { name: 'Copywriting', icon: '✍️', items: ['Website content: Home, About, Services pages'] },
      { name: 'Email Automation', icon: '💬', items: ['Starter email sequence (Mailchimp/Brevo)'] },
      { name: 'Strategy Session', icon: '🧠', items: ['1 x 1-hour strategy call'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone Mini Shoot'] }
    ]
  },
  {
    key: 'Pro',
    title: '🔵 Pro',
    price: '$10,000 AUD',
    value: '~$17,500 AUD',
    subtitle: 'Includes Growth +',
    categories: [
      { name: 'Website Development', icon: '🌐', items: [
        '➔ Custom designed website (10–12 pages)'
      ]},
      { name: 'Mobile App Development', icon: '📱', items: ['Hybrid mobile app (up to 7 screens)'] },
      { name: 'Brand Identity', icon: '🎨', items: [
        'Includes: Logo, style guide',
        '➔ Brand kit + tone of voice'
      ]},
      { name: 'Domain & Email Setup', icon: '📧', items: ['Domain registration + 1 professional email'] },
      { name: 'SEO Setup', icon: '📈', items: [
        'Includes: Basic SEO + 5 keywords',
        '➔ SEO optimization for 10+ keywords'
      ]},
      { name: 'Social Kit', icon: '📱', items: [
        'Includes: 3–5 posts + 5 graphics',
        '➔ 10 branded graphics/templates'
      ]},
      { name: 'Google Tools', icon: '📊', items: [
        'Includes: Google Business Profile + Analytics',
        '➔ Advanced tracking (GA4, Meta Pixel, Tag Manager)'
      ]},
      { name: 'Copywriting', icon: '✍️', items: [
        'Includes: Website pages',
        '➔ Blog post + funnel copy'
      ]},
      { name: 'Email Automation', icon: '💬', items: [
        'Includes: Starter email flows',
        '➔ CRM integrations + automations'
      ]},
      { name: 'Strategy Session', icon: '🧠', items: ['2 x 1-hour strategy sessions'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone shoot + basic video edit'] }
    ]
  },
  {
    key: 'ScaleUp',
    title: '🟣 Scale-Up',
    price: '$25,000 AUD',
    value: '~$38,000 AUD',
    subtitle: 'Includes Pro +',
    categories: [
      { name: 'Website Development', icon: '🌐', items: [
        'Includes: Custom Design',
        '➔ Web app, dashboard or client portal'
      ]},
      { name: 'Mobile App Development', icon: '📱', items: [
        '➔ Native app (8–10 screens)'
      ]},
      { name: 'E-Commerce Platform', icon: '🛒', items: [
        'Includes: Basic e-commerce setup',
        '➔ Advanced e-commerce (subscriptions, POS)'
      ]},
      { name: 'Brand Identity', icon: '🎨', items: [
        'Includes: Brand kit + tone of voice',
        '➔ Full brand story + visuals'
      ]},
      { name: 'Domain & Email Setup', icon: '📧', items: ['Domain registration + 1 professional email'] },
      { name: 'SEO Setup', icon: '📈', items: [
        'Includes: SEO for 10+ keywords',
        '➔ Blog system + conversion funnel SEO'
      ]},
      { name: 'Social Kit', icon: '📱', items: [
        'Includes: 10 branded graphics',
        '➔ 10 more templates available'
      ]},
      { name: 'Google Tools', icon: '📊', items: [
        'Includes: GA4, Meta Pixel, Tag Manager',
        '➔ CMS dashboard + analytics panel'
      ]},
      { name: 'Copywriting', icon: '✍️', items: [
        'Includes: Website, blog, funnel',
        '➔ Advanced content support'
      ]},
      { name: 'Email Automation', icon: '💬', items: [
        'Includes: CRM automations',
        '➔ Advanced customer journeys'
      ]},
      { name: 'Strategy Session', icon: '🧠', items: ['4 x monthly strategy calls'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone shoot + promo video cut'] }
    ]
  },
  {
    key: 'Enterprise',
    title: '🔴 Enterprise',
    price: '$50,000+ AUD',
    value: '~$70,000+ AUD',
    subtitle: 'Includes Scale-Up +',
    categories: [
      { name: 'Website & SaaS Infrastructure', icon: '🌐', items: [
        'Includes: Web App',
        '➔ Full SaaS platform or internal tool'
      ]},
      { name: 'Mobile App Development', icon: '📱', items: [
        '➔ Enterprise-grade app (Cross-platform, APIs, integrations)'
      ]},
      { name: 'E-Commerce Platform', icon: '🛒', items: [
        'Includes: Advanced e-commerce',
        '➔ Full enterprise e-commerce system'
      ]},
      { name: 'Brand Identity', icon: '🎨', items: [
        'Includes: Brand story + visuals',
        '➔ Full internal & external brand system'
      ]},
      { name: 'Domain & Email Setup', icon: '📧', items: ['Domain registration + unlimited emails'] },
      { name: 'SEO Setup', icon: '📈', items: [
        'Includes: Blog system + SEO funnel',
        '➔ Global multilingual SEO targeting'
      ]},
      { name: 'Social Kit', icon: '📱', items: [
        'Includes: All branded graphics',
        '➔ Custom templates available'
      ]},
      { name: 'Google Tools & BI', icon: '📊', items: [
        'Includes: CMS dashboard + analytics',
        '➔ AI business dashboards + KPI tracking'
      ]},
      { name: 'API Integrations', icon: '🔗', items: ['CRM, Payment, Database integrations'] },
      { name: 'LMS / Portal', icon: '🎓', items: ['Custom LMS or client portal system'] },
      { name: 'Copywriting', icon: '✍️', items: ['Complete web, blog, and funnel content'] },
      { name: 'Email Automation', icon: '💬', items: [
        'Includes: CRM customer journeys',
        '➔ Enterprise-grade marketing automations'
      ]},
      { name: 'Strategy Session', icon: '🧠', items: ['12 x weekly 1-hour sessions'] },
      { name: 'Bonus (Melbourne)', icon: '☁️', items: ['Drone shoot or premium video production'] }
    ]
  }
]
