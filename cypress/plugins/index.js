// cypress/plugins/index.js
module.exports = (on, config) => {
    // save all test results as a JSON file
    // https://github.com/bahmutov/cypress-json-results
    require('cypress-json-results')({
      on,
      filename: 'results.json', // default filename
    })
  }