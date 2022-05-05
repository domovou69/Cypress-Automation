class ShopPage {

    selectProducts(arr) {
        arr.forEach(function(el){
            cy.selectProduct(el)
        })
    }

    clickCheckoutButton() {
        cy.get('.nav-link.btn.btn-primary').click()
    }
    
}

export default ShopPage