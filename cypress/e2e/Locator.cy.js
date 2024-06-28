

describe('CssLocators', () => {
    it('CssLocators', () => {
        cy.visit("http://www.automationpractice.pl/index.php?")
        cy.get("input#search_query_top").type("T-Shirts") //Id lcocator 
        cy.get("[name='submit_search']").click() //attibute locator
        cy.get(".lighter").contains("T-Shirts") //Assertaion
    }
    )

})