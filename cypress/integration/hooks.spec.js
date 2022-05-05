/// <reference types="cypress" />
import HomePage from '../support/pageObjects/HomePage'
import ShopPage from '../support/pageObjects/ShopPage'
import CheckoutPage from '../support/pageObjects/CheckoutPage'

describe('Hooks', ()=> {
  
    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Hooks in Cypress', function(){
        const homePage = new HomePage()  
        const shopPage = new ShopPage()
        const checkoutPage = new CheckoutPage()

        let calculatedSumOfTotalPrice = 0;
        let totalPrice = 0;
        

        cy.visit(Cypress.env('url')+ `/angularpractice/`)
        
        let arrProductNames = this.data.productName

        homePage.setName(this.data.name).should('have.value', this.data.name)
            .and('have.attr','minlength','2')
        homePage.getGender().select(this.data.gender).should('have.value', this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEnterpreneaur().should('be.disabled')
        homePage.getShopNavigationLink().click()
 
        shopPage.selectProducts(arrProductNames)
        shopPage.clickCheckoutButton()

        checkoutPage.validateNumberOfUniqueProducts(arrProductNames)
        cy.get('tr td:nth-child(4) strong').each($el => {
            calculatedSumOfTotalPrice += parseInt($el.text().replace(/[^\d-]/g, ''), 10)
        })
        cy.get('h3 strong').then(function(element){
            totalPrice += parseInt(element.text().replace(/[^\d-]/g, ''), 10)
            expect(totalPrice).to.equal(calculatedSumOfTotalPrice)
        })
        cy.contains('Checkout').click()

        cy.get('#country').type('Denmark')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click()
        cy.get('.alert-success > strong').should('have.text', 'Success!')
    })

})