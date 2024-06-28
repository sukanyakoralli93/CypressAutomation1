describe('AmazonpageLaunch', () => {
    it('amazonpageLaunch', () => {
        cy.visit("https://www.amazon.in/")
        cy.get('#nav-link-accountList > .nav-line-2').click();
        cy.get('#ap_email').should('be.empty').type('7411965854')
            .contains('7411965854');

    })

})