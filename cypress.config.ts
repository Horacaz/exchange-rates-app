import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    video: false,
  },
})