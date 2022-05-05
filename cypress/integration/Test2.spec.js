/// <reference types="cypress" />

describe('Test suite2', ()=> {
    // Test UI
    it ('Test case', ()=> {
        cy.visit('/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(500);
      
        cy.get('.products').find('.product').each(($el, index, $list)=>{
            const vegetableName = $el.find('.product-name').text()
            if (vegetableName.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
 
        cy.get('.cart-icon > img').click()
        cy.get('.cart-preview.active > .action-block > button').click()
        cy.contains('Place Order').click()

    })

    it('Validate checkboxes', ()=>{
        cy.visit('/AutomationPractice/')

        // Radio Btn Examples
        cy.get('input[value="radio1"]').click()
        cy.get('input[value="radio2"]').click()
        cy.get('input[value="radio3"]').click()

        // Suggestion Class Example
        cy.get('#autocomplete').type('den').should('have.value', 'den')
        
    })
})