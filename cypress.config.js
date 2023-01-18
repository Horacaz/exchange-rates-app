/* eslint-disable */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  videos: {
    video: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
