describe("Assertiion demo", () => {
    it("Implicit assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should and and are implicit assrestion 
        // cy.url().should('include', 'orangehrmlive.com')  //cy.url -> current url of the webset 
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrm')
        // cy.url().should('include', 'orangehrmlive.com')  //cy.url -> current url of the webset 
        //     .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //     .should('contain', 'orangehrm')
        cy.url().should('include', 'orangehrmlive.com')  //cy.url -> current url of the webset 
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')
            .and('not.contain', 'eerfeofjr')

        cy.title().should('include', 'Orange')
            .and('eq', "OrangeHRM")
            .and('contain', "HRM")
        cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')
        cy.xpath("//a").should('have.length', '5')

    })

})