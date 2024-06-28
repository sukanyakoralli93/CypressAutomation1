describe('xpath locators', () => {

    it('find no of products', () => {

        cy.visit("http://www.automationpractice.pl/index.php?")
        cy.get(".sfHoverForce").click()
        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length', 7)

    })
})