
import eligant from "../../PageObjects/ClientPo/demoqa.PO"
const uso = new eligant();

describe('verify the login function', ()=> {
    // Before(()=> {
    //     crypto.fixture('SmokeTestScript/demoqa data').then(function(data) {
    //         this.data = data
    //     })
    // })
    it('test caase1', function() {
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get(']').should('be.visible')
        cy.get('#reg_username').type('sachin123')
        cy.wait(2000)
        cy.get('label[for="reg_email"]').should ('be.visible')
        cy.get('#reg_email').type('sachinchetty00@gmail.com')
        cy.wait(2000)
        cy.get('[for="reg_password"]').should('be.visible')
        cy.get('#reg_password').type('sachA@43*we')
        cy.wait(2000)
        cy.get('[type="submit"]').eq(2).click()
    })
})