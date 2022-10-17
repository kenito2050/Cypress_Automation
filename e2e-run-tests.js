// e2e-run-tests.js
const cypress = require('cypress')

cypress
  .run({
    // the path is relative to the current working directory
    spec: './cypress/integration/examples/Login.js',
  })
  .then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })