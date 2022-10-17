# Cypress Automation Framework

# Summary

This repository contains a Cypress Automation Framework.
Tests are written in Java Script.
Test URL site: http://automationpractice.com/index.php

Automation Tests are stored in the cypress\integration\examples folder

# Automation Tests and Description of Tests

Login.js

Logs into the test URL, then logs out

Add_t-shirt_checkout.js

Logs into the test URL, Adds a t-shirt, checks out, Logs out

all.cy.js

all.cy.js script alllows execution of all files (Login.js and Add_t-shirt_checkout.js).
In the User interface, after Cypress has been launched, double-click this file to run all the
tests. Note: In the command line interface, all tests can be run using the "cypress run" command (See next section for details).

# To Run Cypress from command line 

node_modules\.bin\cypress run --browser chrome

or run only (1) Spec File (Test Case)

node_modules\.bin\cypress run --spec "cypress/integration/examples/<name_of_spec_file.js>"

# Test Results Output

After Installing Mocha and Mochawesome, run the following command to output to JSON and HTML file using Mochawesome

node_modules\.bin\cypress run --spec "cypress/integration/examples/all.cy.js --reporter mochawesome

See Udemy Video for more further details
https://www.udemy.com/course/cypress-tutorial/learn/lecture/15715654
