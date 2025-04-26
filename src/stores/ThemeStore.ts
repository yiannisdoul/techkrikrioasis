import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // State
  const isDarkMode = ref(false);
  
  // Initialize from localStorage or system preference
  const initTheme = () => {
    console.log("Initializing theme...");
    
    // Check if user has saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      console.log("Found saved theme:", savedTheme);
      isDarkMode.value = savedTheme === 'dark';
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log("No saved theme, using system preference:", prefersDark ? "dark" : "light");
      isDarkMode.value = prefersDark;
    }
    
    // Apply theme immediately
    applyTheme();
    
    // Dispatch custom event for components to listen to
    window.dispatchEvent(new CustomEvent('themechange', { 
      detail: { isDarkMode: isDarkMode.value } 
    }));
  };
  
  // Toggle theme function
  const toggleTheme = () => {
    console.log("Toggling theme from", isDarkMode.value ? "dark" : "light");
    isDarkMode.value = !isDarkMode.value;
    console.log("Toggled to", isDarkMode.value ? "dark" : "light");
    applyTheme();
    
    // Dispatch custom event for components to listen to
    window.dispatchEvent(new CustomEvent('themechange', { 
      detail: { isDarkMode: isDarkMode.value } 
    }));
    
    // Force a DOM update with CSS custom properties
    document.documentElement.style.setProperty(
      '--theme-transition', 
      isDarkMode.value ? 'to-dark' : 'to-light'
    );
    
    // Force a repaint
    setTimeout(() => {
      document.body.style.backgroundColor = "";
      void document.body.offsetHeight; // Force reflow
    }, 10);
  };
  
  // Apply theme to document
  const applyTheme = () => {
    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
    console.log("Saved theme to localStorage:", isDarkMode.value ? "dark" : "light");
    
    // Apply class to document - IMPORTANT: this directly manipulates the DOM
    const htmlElement = document.documentElement;
    
    console.log("HTML element dark class before:", htmlElement.classList.contains('dark'));
    
    if (isDarkMode.value) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    console.log("HTML element dark class after:", htmlElement.classList.contains('dark'));
    
    // Set data-theme attribute for CSS selectors
    htmlElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light');
    
    // Set CSS custom properties for direct usage
    if (isDarkMode.value) {
      // Dark mode colors
      htmlElement.style.setProperty('--background-color', '#121212');
      htmlElement.style.setProperty('--text-color', '#F5F5F5');
      htmlElement.style.setProperty('--navbar-bg', '#1A1A1A');
      htmlElement.style.setProperty('--navbar-text', '#FFFFFF');
      htmlElement.style.setProperty('--card-bg', '#1E1E1E');
      htmlElement.style.setProperty('--primary-color', '#FF7E33');
      htmlElement.style.setProperty('--secondary-color', '#FF4DC1');
    } else {
      // Light mode colors
      htmlElement.style.setProperty('--background-color', '#FCF7F2');
      htmlElement.style.setProperty('--text-color', '#1A1A1A');
      htmlElement.style.setProperty('--navbar-bg', '#FDF8F3');
      htmlElement.style.setProperty('--navbar-text', '#1A1A1A');
      htmlElement.style.setProperty('--card-bg', '#FFFFFF');
      htmlElement.style.setProperty('--primary-color', '#E85D04');
      htmlElement.style.setProperty('--secondary-color', '#D0008E');
    }
  };
  
  // Watch for system preference changes
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        console.log("System preference changed to:", e.matches ? "dark" : "light");
        isDarkMode.value = e.matches;
        applyTheme();
        
        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('themechange', { 
          detail: { isDarkMode: isDarkMode.value } 
        }));
      }
    });
  }
  
  return {
    isDarkMode,
    toggleTheme,
    initTheme
  };
});