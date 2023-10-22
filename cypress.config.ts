import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      bundler: "vite",
      framework: "react",
    },
    specPattern: [
      "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/page/**/*.cy.{js,jsx,ts,tsx}",
    ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      const baseUrl = {
        dev: "http://localhost:5173/base-apparel-coming-soon/",
        prod: "https://metrikspacex.github.io/base-apparel-coming-soon/",
      };

      config.baseUrl = baseUrl[config.env.VERSION];
      return config;
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
  },
});
