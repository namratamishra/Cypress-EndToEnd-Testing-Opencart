const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
   env:{
    URL:"https://naveenautomationlabs.com/opencart/index.php?route=account/register"
   }
  },
})