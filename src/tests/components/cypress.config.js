const { defineConfig } = require("cypress");

module.exports = defineConfig({

  baseUrl: 'http://localhost:4200',
  chromeWebSecurity: false,
  integrationFolder: 'cypress/integration',
  fixturesFolder: 'cypress/fixtures',
  pluginsFile: 'cypress/plugins/index.js',
  supportFile: 'cypress/support/index.js',
  video: true,
  viewportHeight: 900,
  viewportWidth: 1440,


  e2e: {
    baseUrl: 'http://localhost:4200',

  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
