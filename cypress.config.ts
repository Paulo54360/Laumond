import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'qsbp7v',
  video: true,
  viewportHeight: 900,
  viewportWidth: 1440,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
