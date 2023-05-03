describe('suite1', () => {
    it('case1', () =>{
        cy.visit('https://register.rediff.com/register/register.php?')

cy.get('[type="text"]').eq(0).type('sachin').clear().type('nate')
cy.get('[type="text"]').eq(1).type('natediaaz@gmail.com')
cy.get('[type="password"]').eq(0).type('asd123*')
cy.get('[type="password"]').eq(1).type('asd123*')
cy.get('[type="text"]').eq(2).type('nickdiaz17@gmail.com')

cy.get('input[type="checkbox"]').check().should('be.checked') 
cy.get('input[type="checkbox"]').uncheck().check().should('be.checked') //for uncheck asertion('not.be.checked')

cy.get('[id="mobno"]').type('9876543210')


 cy.get('select[onchange="fieldTrack(this);"]').eq(1).select('07')//
 cy.get('select[onchange="fieldTrack(this);"]').eq(2).select('AUG')//bygiving indexvalue month is accessed or we mentionin
 cy.get('select[onchange="fieldTrack(this);"]').eq(2).select('AUG').should('have.value','08')//toverifying the AUG value
 cy.get('select[onchange="fieldTrack(this);"]').eq(3).select('2000')

cy.get('select[style="width:183px;"]').select('Bangalore')
cy.get('input[value="m"]').check().should('be.checked') //.check()used to click the checkbox of

cy.get('select[id="country"]').select('India')

cy.get('input[value="f"]').should('not.be.checked')//if i usesd .check().should('not.be.checked')still gona check

cy.get('[class="captcha"]').type('RB43')
cy.get('input[id="Register"]').click()
 })
})
