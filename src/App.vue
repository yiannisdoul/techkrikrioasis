<template>
  <div>
    <!-- Sticky NavBar -->
    <NavBar />

    <!-- Main Page Content -->
    <router-view />

    <!-- CTA Section shown on all pages except certain routes -->
    <CTASection v-if="showCTA" />

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 left-6 bg-[#E85D04] hover:bg-[#D0008E] text-white p-3 rounded-full shadow-lg transition z-50 text-xl font-bold"
    >
      ↑
    </button>
    <!-- ChatBot -->
    <div
      class="chatbot-container fixed bottom-6 right-6 bg-white shadow-lg rounded-lg p-4 w-80"
    >
      <div class="chatbot-header bg-[#E85D04] text-white p-2 rounded-t-lg">
        <h3>TechKrikri Oasis ChatBot</h3>
      </div>
      <div class="chatbot-messages overflow-y-auto h-64 p-2">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="message.sender"
        >
          <p
            class="p-2 rounded-lg"
            :class="message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'"
          >
            {{ message.text }}
          </p>
        </div>
      </div>
      <div class="chatbot-input mt-2">
        <input
          v-model="userInput"
          @keyup.enter="sendMessage"
          placeholder="Type your message..."
          class="w-full p-2 border rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import NavBar from "./components/layout/NavBar.vue";
import Footer from "./components/layout/Footer.vue";
import CTASection from "./components/sections/CTASection.vue";

const route = useRoute();

const showScrollTop = ref(false);
const showCTA = ref(true);

// Optional: Exclude CTA on specific routes
const excludedPaths = ["/contact"];

// Handle scroll-to-top visibility + typewriter reset
onMounted(() => {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    showScrollTop.value = scrollTop > 100;

    // Reset the typewriter when user scrolls to top
    if (scrollTop === 0 && window.__resetTypewriter__) {
      window.__resetTypewriter__();
    }
  });
});

// Watch for route change to update CTA visibility
watch(
  () => route.path,
  (newPath) => {
    showCTA.value = !excludedPaths.includes(newPath);
  },
  { immediate: true }
);

// Scroll to top action
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Chatbot functionality
const messages = ref([
  {
    sender: "bot",
    text: "Welcome to TechKrikri Oasis! How can I assist you today?",
  },
]);
const userInput = ref("");

async function sendMessage() {
  if (!userInput.value.trim()) return;

  // Add user message to chat
  messages.value.push({ sender: "user", text: userInput.value });

  // Prepend context for the bot
  const context =
    "You are a chatbot acting as a sales agent for TechKrikri Oasis (https://techkrikrioasis.com.au), a company offering custom web development, digital solutions, and UI/UX design services. Answer questions and provide detailed, relevant information about the site's services.";
  const promptText = `${context}\nUser: ${userInput.value}`;

  // Call Hugging Face API for response
  const response = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: promptText }),
  });

  const data = await response.json();

  const botReply = data[0].generated_text || "Sorry, I could not process that.";

  // Add bot response to chat
  messages.value.push({ sender: "bot", text: botReply });

  // Clear input
  userInput.value = "";
}
</script>

<style>
/* Optional: smoother appearance */
button[v-cloak] {
  display: none;
}

.chatbot-container {
  max-height: 80vh;
}
.chatbot-messages .user {
  text-align: right;
}
.chatbot-messages .bot {
  text-align: left;
}
</style>
