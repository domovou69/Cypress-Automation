/// <reference types="cypress" />
import neatCsv from 'neat-csv';


describe('Suite',()=>{

    // Dowloaded files will be placed to cypress/downloads
    it('Read CSV', ()=>{
        cy.readFile(Cypress.config('fileServerFolder') + "/cypress/downloads/my_csv.csv")
        .then(async (text)=>{
            const csv = await neatCsv(text)
            cy.log(csv)

            // Convert CSV to JSON
            const actual = csv[0] ["Column1"]
            cy.log(actual)
        })
    })

    
})