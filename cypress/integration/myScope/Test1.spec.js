/// <reference types="cypress" />

describe('Test suite', ()=> {
    // Test UI
    it ('Test case', ()=> {
        cy.visit('/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(500);
        
        cy.get('.product:visible').should('have.have.length', 4)
        // parent child
        cy.get('.products').find('.product').should('have.have.length', 4)
        
        // cy.get('.products').find('.product').eq(1)
        // .contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list)=>{
            const vegetableName = $el.find('.product-name').text()
            if (vegetableName.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
 
        // cy.get('.brand').should('have.text', 'GREENKART')
 
        // cy.get('.brand').then(function(logoElement){
        //     cy.log(logoElement.text())
        // }) 

        cy.get('.cart-icon > img').click()
        cy.get('.cart-preview.active > .action-block > button').click()


    })
})