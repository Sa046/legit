describe('verify the login validation', function() {
before(function() {

cy.fixture('example').then(function(data){
this.data=data;
})
})

it('TestCase', function(){
cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')

cy.get('[id="FirstName"]').type(this.data.name)
cy.get('[id="LastName"]').type (this.data.lastname)
cy.get('[id="Email"]').type(this.data.email)
cy.get('[class="forcheckbox"]').eq(0).should('be.visible')
cy.get('[id="Company"]').type(this.data.companyname)
cy.get('[type="password"]').eq(0).type(this.data.password)
cy.get('[type="password"]').eq(1).type(this.data.confirm)
cy.get('[type="submit"]').eq(1).click()
    })
    })
