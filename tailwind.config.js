// tailwind.config.js
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      typography: {
        orange: {
          css: {
            '--tw-prose-links': '#E85D04',
            '--tw-prose-headings': '#1f2937',
            '--tw-prose-bold': '#1f2937',
            '--tw-prose-quotes': '#E85D04',
          },
        },
        // Add dark mode typography variant
        dark: {
          css: {
            '--tw-prose-body': '#e2e8f0',
            '--tw-prose-headings': '#f8fafc',
            '--tw-prose-lead': '#e2e8f0',
            '--tw-prose-links': '#FF7E33',
            '--tw-prose-bold': '#f8fafc',
            '--tw-prose-counters': '#94a3b8',
            '--tw-prose-bullets': '#94a3b8',
            '--tw-prose-hr': '#475569',
            '--tw-prose-quotes': '#FF7E33',
            '--tw-prose-quote-borders': '#334155',
            '--tw-prose-captions': '#94a3b8',
            '--tw-prose-code': '#f8fafc',
            '--tw-prose-pre-code': '#e2e8f0',
            '--tw-prose-pre-bg': '#1e293b',
            '--tw-prose-th-borders': '#475569',
            '--tw-prose-td-borders': '#334155',
          },
        },
      },
      colors: {
        // Brand colors with light/dark variants
        primary: {
          DEFAULT: '#E85D04',
          dark: '#FF7E33',
        },
        secondary: {
          DEFAULT: '#D0008E',
          dark: '#FF4DC1',
        },
        background: {
          light: '#FDF8F3',
          DEFAULT: '#FDF8F3',
          dark: '#121212',
        },
        text: {
          light: '#1A1A1A',
          DEFAULT: '#1A1A1A',
          dark: '#F5F5F5',
        }
      }
    },
  },
  plugins: [typography],
}