describe('My First Test', () => {
    it('test2', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })
    it('test3', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM123')

    })
})
