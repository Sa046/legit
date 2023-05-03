describe('testsiutename', () => {

it('case1', () => {

cy.visit('https://www.flipkart.com/')

cy.get('input[title="Search for products, brands and more"]').type('mobile')

cy.get('button[type="submit"]').click()

cy.get('button[type="submit"]').click()

})
})
