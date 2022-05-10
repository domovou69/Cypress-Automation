/// <reference types="cypress" />

describe('Automation suite', ()=> {

    // TEST 1
    it('API mocking request', ()=> {
        cy.visit('/angularAppdemo/')
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode : 200,
            body : [
                {
                "book_name":"RestAssured with Java",
                "isbn":"RSU",
                "aisle":"2301"}
            ]
        }).as('bookretriveals')

        cy.get("button[routerlink='/library']").click()
        cy.wait('@bookretriveals').should(({request,response})=>{
            cy.get('tr').should('have.length', response.body.length + 1)
            
        })
        cy.get('p').should('have.text','Oops only 1 Book available')
    })

    // TEST 2
    it('API mocking request', ()=>{
        cy.visit('/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
            (req)=>{
                req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
                req.continue((res)=>{
                   // expect(res.statusCode).to.equal(403)
                })
            }).as("updatedUrl_403")  

        cy.get("button[routerlink='/library']").click()
        cy.wait('@updatedUrl_403')
    })

    //TEST 3
    it('API POST', ()=> {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"Learn Appium Automation with Java",
            "isbn":"bcdzfcgvh",
            "aisle":"227",
            "author":"John foe"
        }).then(function(response){
            expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response.body).to.have.property('ID', 'bcd227')
        })

    })

})