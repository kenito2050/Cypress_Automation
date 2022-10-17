const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  // specs to run here
  spec: './cypress/integration/examples/Login.js',
})
.then((results) => {
  const args = {
    target: 'token',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})