/// <reference types="cypress" />

describe('Automation suite', ()=> {

    it('Order products', () => {
        let subTotal = 0;
        let taxTotal = 0;
        let QTY = 0;
        let totalSum = 0;

        cy.visit('/')
        cy.get('button[data-testid="header__open-store-browser"]').click()
        cy.get('button[data-testid="store-browser__store-info__1__visit-store"]').click()

        cy.contains('text', 'Prevailing Tax Group').click()
        cy.get('button[tabindex="0"]').click({ multiple: true })
        cy.get('button[data-testid="product-details__add-product"]').click()
        cy.get('button[data-testid="store-bar__checkout"]').click()
        cy.get('p[data-testid="cart__subtotal__value"]').then(function(element){
            subTotal += parseInt(element.text().replace(/[^\d-]/g, ''), 10)
            expect(subTotal).to.equal(29.97)
        })
        cy.get(' p[data-testid="cart__tax__value"]').then(function(element){
            taxTotal += parseInt(element.text().replace(/[^\d-]/g, ''), 10)
            expect(taxTotal).to.equal(2.66)
        })
        cy.get('div[data-testid="cart__cart-item__0__quantity"] h6' ).then(function(element){
            QTY += parseInt(element.text().replace(/[^\d-]/g, ''), 10)
            expect(QTY).to.equal(3)
        })
        cy.get('h6[data-testid="cart__total__label"]').then(function(element){
            QTY += parseInt(element.text().replace(/[^\d-]/g, ''), 10)
            expect(itemsTotal).to.equal(3)
        })
        cy.get('h6[data-testid="cart__total__label"]').then(function(element){
            totalSum += parseInt(element.text().replace(/[^\d-]/g, ''), 10)
            expect(totalSum).to.equal(subTotal + taxTotal)
        })
        cy.get('button[data-testid="cart__checkout"]').click()

        cy.get('input[name="firstName"]').type('firstName').should('have.value', 'firstName')
        cy.get('input[name="lastName"]').type('lastName').should('have.value', 'lastName')
        cy.get('input[name="emailAddress"]').type('email@gmail.com').should('have.value', 'email@gmail.com')
        cy.get('input[name="phoneNumber"]').type('1234657980').should('have.value', '1234657980')



    })

})