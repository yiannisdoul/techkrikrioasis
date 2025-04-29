<template>
  <section class="py-16 px-6 max-w-5xl mx-auto" data-aos="fade-up">
    <h2 class="text-3xl font-bold text-center mb-6 text-[#D0008E]">
      Frequently Asked Questions
    </h2>
    <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Common questions about our services and process. Can't find what you're looking for?
      <router-link to="/contact" class="text-[#E85D04] hover:underline">Schedule a free call</router-link>.
    </p>

    <div class="space-y-4">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index"
        class="border border-gray-200 rounded-xl overflow-hidden bg-white"
      >
        <button
          @click="toggleFaq(index)"
          class="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          :aria-expanded="activeFaq === index"
          :aria-controls="`faq-content-${index}`"
        >
          <span class="font-medium text-[#1A1A1A]">{{ faq.question }}</span>
          <span 
            class="transform transition-transform duration-300"
            :class="activeFaq === index ? 'rotate-180' : ''"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#E85D04]">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        
        <div
          :id="`faq-content-${index}`"
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="{ 'max-h-0': activeFaq !== index }"
          :style="{ maxHeight: activeFaq === index ? `${faqHeights[index]}px` : '0' }"
        >
          <div 
            :ref="el => { if (el) faqRefs[index] = el }"
            class="p-5 pt-0 text-gray-600"
          >
            <p v-html="faq.answer"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue';
  
  const faqs = [
    {
      question: "What services does Tech Kri-Kri Oasis offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, SEO optimization, e-commerce solutions, digital marketing, drone photography, graphic design, and business strategy consulting."
    },
    {
      question: "How long does it take to build a website?",
      answer: "A standard website typically takes 3-6 weeks to complete, depending on complexity. Basic websites may be ready in 2-3 weeks, while complex web applications or e-commerce sites can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer ongoing website maintenance?",
      answer: "Yes! We provide ongoing website maintenance and support through our care plans. These plans include regular updates, security patches, performance optimization, and technical support to keep your site running smoothly."
    },
    {
      question: "How much does a custom website or app cost?",
      answer: "Our website projects typically start from $2,500 AUD for basic sites, while custom applications and e-commerce platforms start from $5,000+. Enterprise solutions begin at $25,000+. The final cost depends on your specific requirements and feature set. We recommend <router-link to='/contact' class='text-[#E85D04] hover:underline'>booking a free discovery call</router-link> for a personalized quote."
    },
    {
      question: "Do you work with clients outside of Melbourne?",
      answer: "Absolutely! While we're based in Melbourne, we work with clients across Australia and internationally. Most of our collaboration happens virtually through video calls and online tools. Our drone photography services are limited to Melbourne, but all other services are available worldwide."
    },
    {
      question: "What's your process for starting a new project?",
      answer: "Our process begins with a free discovery call to understand your goals and requirements. Next, we'll provide a detailed proposal and quote. Once approved, we'll kick off with a strategy session, create wireframes and designs for approval, then move to development. After thorough testing, we'll launch your project and provide training if needed."
    }
  ];
  
  const activeFaq = ref<number | null>(null);
  const faqRefs = ref<HTMLElement[]>([]);
  const faqHeights = ref<number[]>([]);
  
  function toggleFaq(index: number) {
    activeFaq.value = activeFaq.value === index ? null : index;
  }
  
  onMounted(async () => {
    // Wait for the DOM to be fully rendered
    await nextTick();
    
    // Calculate and store the height of each FAQ content
    faqHeights.value = faqRefs.value.map(el => el?.scrollHeight || 0);
  });
</script>