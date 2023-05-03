describe('Multiple clk by XPATH METHOD', function() {
    beforeEach(function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('validating for multiple clk', function() {
        
     cy.xpath('//button[text()="ADD TO CART"]').click({multiple: true})

    cy.wait(2000)
    cy.xpath('//input[@type="search"]').type('grapes')
    cy.xpath('//button[@type="submit"]').click();
    } 
)



//for css locator
describe('Multiple clk', function() {
    it('validating for multiple clk using CSS MTHD', function() {
     cy.visit(Cypress.env("clienturl"))
//the above sytax is used to get the data from cypress.config.js fldr where it's defined
// env is an object it has property&value, clienturl is a property&it has value init 
    cy.wait(2000)
    cy.get('[type="search"]').type('tomato')
    cy.get('[type="submit"').click({force: true})
    })    
})
})

//npx cypress run --headed --spec cypress\e2e\multipleClk.cy.js ==> headed mode run cmd
//npx cypress run --headedless --spec cypress\e2e\multipleClk.cy.js ==> headed mode run cmd
