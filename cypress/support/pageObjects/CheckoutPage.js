class ChecoutPage {

    validateNumberOfUniqueProducts(arrProductNames) {
        cy.get('h4 a').should('have.length', arrProductNames.length)
    }

    calculateSumOfProductsTotal() {
        cy.get('td:nth-child(4) > strong')
    }
}

export default ChecoutPage