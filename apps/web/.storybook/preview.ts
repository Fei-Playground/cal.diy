import type { Preview } from '@storybook/nextjs-vite'

// Load the app's global Tailwind styles so @calcom/ui components render with
// their real design-system tokens (bg-attention, text-emphasis, etc.).
import '../styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;