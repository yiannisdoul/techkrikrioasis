// tailwind.config.js
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
      },
    },
  },
  plugins: [typography],
}
