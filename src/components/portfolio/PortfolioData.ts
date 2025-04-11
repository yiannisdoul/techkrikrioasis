export interface PortfolioProject {
  title: string
  description: string
  image: string[]
  liveLink?: string
  socialLinks?: { type: string; url: string }[]
  categories: string[]
}

export const projects: PortfolioProject[] = [
  {
    title: 'Home of Scent',
    description:
      'We proudly partnered with <strong>Home of Scent</strong> to deliver a complete digital and creative solution.\n\n' + 
      '<strong>Home of Scent</strong> crafts premium soy candles designed to transform your space into a sanctuary of tranquility and delight, using hand-poured, natural ingredients and eco-friendly practices.\n\n' +
      'Our team developed a modern, elegant website showcasing the brand\'s essence, while also handling <strong>professional product photography</strong> to capture the beauty of the candles for marketing and visual storytelling.\n\n' +
      'In addition, we created a <strong>bespoke logo</strong> reflecting the brand\'s sophisticated identity and set up a full <strong>e-commerce platform</strong> to enable seamless online sales.\n\n' +
      'Each service — from <strong>branding</strong> to <strong>development</strong> to <strong>product imagery</strong> — was tailored to create a cohesive and memorable online experience for Home of Scent.',
    image: [
      '/portfolio/home-of-scent-1.png', 
      '/portfolio/home-of-scent-2.png', 
      '/portfolio/home-of-scent-3.png',
      '/portfolio/home-of-scent-4.png',
    ],
    liveLink: 'https://homeofscent.com.au/',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/homeofscentau/' },
      { type: 'instagram', url: 'https://www.instagram.com/home_of_scent_au/' },
    ],
    categories: ['Web Development', 'SEO', 'E-Commerce', 'Graphic Design', 'Drone Photography'],
  },
  {
    title: 'Bearcon Building Services',
    description: 
    'Delivering top-tier building solutions for residential and commercial sectors. Professional, efficient, cost-effective outcomes.\n\n' +
    'We proudly collaborated with <strong>Bearcon Building Services</strong> to deliver a complete digital and marketing package.\n\n' +
    'Our work included developing a <strong>professional website</strong> that showcased their projects and services with a modern, user-friendly design, perfectly aligned with their brand\'s identity.\n\n' +
    'In addition, we produced a <strong>promotional video</strong> highlighting one of their major builds, capturing the craftsmanship and quality of their work through engaging visual storytelling.\n\n' +
    'We also provided ongoing <strong>SEO optimization</strong> and <strong>digital strategy support</strong>, helping Bearcon attract new clients through organic search and carefully crafted social media marketing initiatives.\n\n' +
    'This all-in-one solution — from website development to content creation and online growth strategy — ensured Bearcon Building Services achieved a strong and credible online presence.',    
    image: [
      '/portfolio/bearcon-building-services-1.png',
      '/portfolio/bearcon-building-services-2.png',
      '/portfolio/bearcon-building-services-3.png',
    ],
    liveLink: 'https://bearconbs.com.au/',
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/reel/C_smChYy8AP/' },
    ],
    categories: ['Web Development', 'SEO', 'Drone Photography', 'Digital Marketing', 'Strategy & Consulting'],
  },
  {
    title: 'Emphasis Care',
    description: 
    'Care and nursing services you can trust, providing comfort and confidence in the safety of your own home.\n\n' +
    'We proudly partnered with <strong>Emphasis Care</strong> to deliver a complete digital foundation for their growing business.\n\n' +
    'Our team developed a clean and compassionate <strong>website</strong> that clearly communicates their commitment to high-quality in-home care services.\n\n' +
    'We also provided essential <strong>SEO setup</strong> to help Emphasis Care appear in relevant local searches, making it easier for families to discover their offerings.\n\n' +
    'To further strengthen their brand identity, we designed a bespoke <strong>logo</strong> along with custom <strong>graphics, icons, and imagery</strong> that are used throughout the website to visually reinforce trust, care, and professionalism.\n\n' +
    'This integrated solution ensured that Emphasis Care could confidently present their services online with a strong and credible image.',    
    image: [
      '/portfolio/emphasis-care-services-1.png',
      '/portfolio/emphasis-care-services-2.png',
      '/portfolio/emphasis-care-services-3.png',
    ],
    liveLink: 'https://emphasiscareservices.com.au/',
    socialLinks: [],
    categories: ['Web Development', 'SEO', 'Graphic Design'],
  },
  {
    title: 'El Condor Cleaning Services',
    description: 
    'Superior cleaning services for both residential and commercial clients. Pristine environments guaranteed.\n\n' +
    'We proudly collaborated with <strong>El Condor Cleaning Services</strong> to establish a strong online presence tailored to their high standards.\n\n' +
    'Our team developed a clean, professional <strong>website</strong> that highlights their commitment to delivering spotless residential and commercial environments.\n\n' +
    'We also provided essential <strong>SEO setup</strong> to optimize their visibility in local search results, helping more clients discover their top-tier cleaning services.\n\n' +
    'Additionally, we created a distinctive <strong>logo</strong> and delivered custom <strong>graphics, icons, and imagery</strong> to reinforce their brand identity and communicate trust and reliability.\n\n' +
    'This complete solution positioned El Condor Cleaning Services as a trusted choice for those seeking exceptional cleaning outcomes.',    
    image: [
      '/portfolio/el-condor-cleaning-services-1.png',
      '/portfolio/el-condor-cleaning-services-2.png',
      '/portfolio/el-condor-cleaning-services-3.png',
    ],
    liveLink: 'https://elcondorcleaningservices.com.au/',
    socialLinks: [],
    categories: ['Web Development', 'SEO', 'Graphic Design'],
  },
  {
    title: 'Andes Plumbing Group',
    description: 
    'Your first choice for all your plumbing needs. Professional, reliable and affordable plumbing solutions.\n\n' +
    'We had the opportunity to work closely with <strong>Andes Plumbing Group</strong> to build a strong digital foundation for their business.\n\n' +
    'Our team developed a professional <strong>website</strong> showcasing their plumbing services, and conducted an on-site <strong>photoshoot</strong> to capture authentic team imagery for use across digital platforms.\n\n' +
    'We also produced a promotional <strong>drone video</strong> with full editing to highlight their projects from a unique aerial perspective, helping to enhance their marketing efforts.\n\n' +
    'Alongside the creative assets, we delivered <strong>digital marketing</strong> and <strong>social media marketing</strong> services to drive engagement and attract new clients.\n\n' +
    'Although Andes Plumbing Group is <strong>no longer actively operating</strong>, we are proud of the work completed and the lasting impression created through this collaboration.',    
    image: [
      '/portfolio/andes-plumbing-group.png',
    ],
    liveLink: 'https://andesplumbinggroup.com.au/',
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/andes_plumbing_group/' },
    ],
    categories: ['Web Development', 'Drone Photography', 'Digital Marketing', 'Strategy & Consulting'],
  },
  {
    title: '3000 Auto Spa',
    description: 
    'Premium auto detailing services across Melbourne. Every detail matters. We make your car look and feel like new.\n\n' +
    'We proudly partnered with <strong>3000 Auto Spa</strong> to build a high-end digital presence that reflects their premium services.\n\n' +
    'Our work included crafting a modern <strong>website</strong> with a beautifully integrated <strong>multi-step booking form</strong> to streamline the customer journey and increase conversions. This feature can be observed within the project images.\n\n' +
    'We also provided custom <strong>graphic design</strong> services, creating bespoke icons and imagery that visually communicate the quality and attention to detail that 3000 Auto Spa delivers.\n\n' +
    'To boost online visibility, our team implemented targeted <strong>SEO</strong> strategies that continue to drive organic traffic and improve search rankings.\n\n' +
    'Our engagement didn’t stop at launch — we continue to offer <strong>strategy and consulting</strong> services to support their ongoing growth and digital success.',    
    image: [
      '/portfolio/3000-auto-spa-1.png',
      '/portfolio/3000-auto-spa-2.png',
      '/portfolio/3000-auto-spa-3.png',
      '/portfolio/3000-auto-spa-4.png',
      '/portfolio/3000-auto-spa-5.png',
      '/portfolio/3000-auto-spa-6.png',
      '/portfolio/3000-auto-spa-7.png',
      '/portfolio/3000-auto-spa-8.png',
    ],
    liveLink: 'https://3000autospa.com.au/',
    socialLinks: [],
    categories: ['Web Development', 'SEO', 'Graphic Design', 'Strategy & Consulting'],
  },
]
