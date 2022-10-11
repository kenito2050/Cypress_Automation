//cypress - Spec

describe('My First Cypress Test', function () {
    it('Visits the automationpractice.com site, logs in and logs out', function () {
        //Visit the Automation Practice Website
        cy.visit("http://automationpractice.com/index.php");

        // Click Sign In
        cy.get("#header > div.nav > div > div > nav > div.header_user_info > a").click()

        // Wait Statement
        cy.wait(3000)

        // Enter UserName
        cy.get("#email").click()
        cy.get("#email").type('ken_villarruel@sbcglobal.net')

        // Enter Password
        cy.get("#passwd").click()
        cy.get("#passwd").type('Twinlakes01!')

        // Click Submit
        cy.get("#SubmitLogin > span > i").click()

        // Wait Statement
        cy.wait(3000)

        // Add T-Shirt to Cart
        // Nav to T-Shirts
        cy.visit("http://automationpractice.com/index.php?id_category=5&controller=category");

        // Wait Statement
        cy.wait(3000)

        // Click Add to Cart
        //cy.debug()
        cy.get("#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default").click()

        // Wait Statement
        cy.wait(7000)

        // Click Proceed to Checkout
        cy.get("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span").click()

        // Wait Statement
        cy.wait(3000)

        // Scroll down 700 pixels
        cy.scrollTo(0, 700)

        // Click Proceed to Checkout
        cy.get("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span").click()

        // Wait Statement
        cy.wait(3000)

        // Click Proceed to Checkout
        cy.get("#center_column > form > p > button").click()

        // Check the "Agree to Terms of Service" Checkbox
        cy.get("#cgv").click()

        // Click Proceed to Checkout
        cy.get("#form > p > button").click()

        // Wait Statement
        cy.wait(3000)

        // Scroll down 700 pixels
        cy.scrollTo(0, 700)

        // Payment Method
        // Pay by Bank Wire
        //cy.get("#HOOK_PAYMENT > div: nth - child(1) > div > p > a").click()

        // Nav to "Confirm my Order" Page
        cy.visit("http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment");

        // Wait Statement
        cy.wait(9000)

        // Click "I Confirm My Order"
        cy.get("#cart_navigation > button > span").click()

        // Wait Statement
        cy.wait(3000)

        // Logout
        cy.get("#header > div.nav > div > div > nav > div:nth-child(2) > a").click()

    })
})