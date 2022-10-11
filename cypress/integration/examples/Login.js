//cypress - Spec

describe('My First Cypress Test', function () {
    it('Visits the automationpractice.com site, logs in, Adds t-shirt, checks out, logs out', function () {
        //Visit the Automation Practice Website
        cy.visit("http://automationpractice.com/index.php");

        // Click Sign In
        cy.get("#header > div.nav > div > div > nav > div.header_user_info > a").click()

        // Enter UserName
        cy.get("#email").click()
        cy.get("#email").type('ken_villarruel@sbcglobal.net')

        // Enter Password
        cy.get("#passwd").click()
        cy.get("#passwd").type('Twinlakes01!')

        // Click Submit
        cy.get("#SubmitLogin > span > i").click()

        // Logout
        cy.get("#header > div.nav > div > div > nav > div:nth-child(2) > a").click()

    })
})