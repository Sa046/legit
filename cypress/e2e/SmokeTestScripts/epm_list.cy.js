 
 
import Loginsac from '../../PageObjects/ClientPo/third.js'
const login =new Loginsac();
//import Loginpage from '../../PageObjects/ClientPo/Loginpage.js';
//const loginpages = new Loginpage();

describe('validation step', () => {
it('test case1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


        cy.get('[class="oxd-label"]').eq(0).should ("be.visible")
        cy.get('[class="oxd-label"]').eq(1).should ("be.visible")

       login.creds('Admin', 'admin123')

        cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(1).click()
        cy.get('[class="oxd-text oxd-text--h5 oxd-table-filter-title"]').should('have.text','Employee Information')
         
        cy.get('[class="oxd-label"]').eq(0).should('be.visible')
        cy.get('input[placeholder="Type for hints..."]').eq(0).type('a')

        cy.get('[class="oxd-label"]').eq(1).should('be.visible')
        cy.get ('input[class="oxd-input oxd-input--active"]').eq(1).type('bv')

        cy.get('[class="oxd-label"]').eq(2).should('be.visible')
        cy.get('[class="oxd-select-text-input"]').eq(2).should('be.visible','contract')

        cy.get('[class="oxd-label"]').eq(3).should('be.visible')
       
        cy.get('[class="oxd-select-text oxd-select-text--active"]')

        cy.get('[class="oxd-label"]').eq(4).should('be.visible')
        cy.get('input[placeholder="Type for hints..."]').eq(1)

        cy.get('[class="oxd-label"]').eq(5).should('be.visible')
        cy.get('[class="oxd-select-text-input"]').eq(2).should('be.visible','Automation Tester')


        cy.get('[class="oxd-label"]').eq(6).should('be.visible')
        cy.get('[class="oxd-select-text-input"]').eq(3)

        cy.get('button[type="submit"]').click()
})

})