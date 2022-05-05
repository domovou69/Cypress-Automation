/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('checkBox Automation', ()=> {
  

    it('Validate checkboxes', ()=>{
        cy.visit('/AutomationPractice/')

        // Radio Btn Examples
        cy.get('input[value="radio1"]').check().should('be.checked')
        cy.get('input[value="radio2"]').check().should('be.checked')
        cy.get('input[value="radio3"]').check().should('be.checked')

        // Suggestion Class Example
        cy.get('#autocomplete').type('de').should('have.value', 'de')
        cy.get('.ui-menu-item div').each(($el)=> {
            if ($el.text() === 'Denmark') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Denmark')
        // .then().type('{downarrow}').click()
        
        // Dropdown Example
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1')
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')
        cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3')

        // Checkbox Example
        cy.get('input[value="option1"]').click().should('be.checked').and('have.value','option1')
        cy.get('input[value="option2"]').click().should('be.checked').and('have.value','option2')
        .uncheck().should('not.be.checked')
        cy.get('input[value="option3"]').click().should('be.checked').and('have.value','option3')
        
        cy.get('input[type="checkbox"]').each(($el)=>{
            cy.wrap($el).click()
        })

        // Open Window ???
        // cy.get('#openwindow').then(function(e){
        //     const url = el.prop('href')
        //     cy.visit(url)
        // }) 
        // cy.get('#openwindow').click()
         

        // Switch Tab Example
        cy.get('#opentab').invoke('removeAttr', 'target') // remove 'target' attribute to open link in the same window
        cy.get('#opentab').click()
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')

        // Switch to Alert Example (Cy automatically clicked on popup)
        cy.get('#name').type('Mike')
        cy.get('#alertbtn').click()
        cy.on('window:alert', (string)=> {
            expect(string).to.equal('Hello Mike, share this practice page and share your knowledge')
        })
        cy.get('#name').type('Mike')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (string)=> {
            expect(string).to.equal('Hello Mike, Are you sure you want to confirm?')
        })


        // Element Display Example
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')


        // Table handeling
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) => {
            const text =$el.text()
            if (text.includes('Python')) {
                cy.get($el).next().then(function(price){
                    const priceValue = price.text()
                    expect(priceValue).to.equal('25')
                })
            }
        })

        // Mouse Hover
        cy.get('div.mouse-hover-content').invoke('show')
        cy.get('.mouse-hover-content').should('be.visible')

        // cy.contains('Top').click({force:true})
        
        

    }) 

    it('Handling iframe', () => {
        cy.frameLoaded('#courses-iframe') 
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find('button .h-7').should('have.length', '2') // not working
    })

    

})