// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
// cypress/plugins/index.js

module.exports = (on, config) => {
    // Example of accessing Node.js-specific environment variables
    console.log('Node.js Environment Variable:', process.env.NODE_ENV);
    return config;
  };
  

// Alternatively you can use CommonJS syntax:
// require('./commands')