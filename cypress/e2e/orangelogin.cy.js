

import Loginpage from "../PageObjects/ClientPo/Loginpage.js"

const login = new Loginpage()

   describe('login validation with valid data', () => {
    beforeEach(function(){

   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('valid test data 1', () => {
    login.loginwithcreds('Admin','admin123')    
    cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should ("have.text",'Dashboard')
    })


    it('Invaild test data 2', () => {
      login.loginwithcreds('Admin','admin12345')  
      cy.contains(login.LoginErrorMsg()).should("have.text",'Invalid credentials')
     })
    })
