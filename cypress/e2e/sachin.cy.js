describe('Automation - Working With Tables in webpage', function () {

    it('Cypress Test Case - Understanding Tables in webpage', function () {


        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices');

        cy.xpath("//table[@class='dataTable']/tbody/tr").should('have.length', '30');


        cy.xpath("//table[@class='dataTable']/tbody/tr[1]/td").should('have.length', '6');

        //cy.xpath('//table[@class="dataTable"]/tbody/tr[1]/td').should('have.length', '6');

        ////Get row data and Validate column text

        cy.xpath('//table[@class="dataTable"]/tbody/tr[2]').within(() => {

            cy.get('td').eq(2).then((ele) => {

                var text = ele.text()

                cy.log(text)

                expect(text).to.equal("1359.95")
            })

            cy.get('td').eq(0).should('contain.text', 'Bajaj Finance')

        })
        })
        })
// describe('tables working lctr', () => {
// it ('lctrs', () =>{
//     cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices')
// cy.xpath('//table[@class="dataTable"]/tbody/tr')
// cy.xpath('//table[@class="dataTable"]/tbody/tr').should('have.length','30')
// cy.xpath('//table[@class="dataTable"]/thead/tr/th').should('have.length','6')
// cy.xpath('//table[@class="dataTable"]/tbody/tr[3]').within(() => {

//             cy.get('td').eq(2).then((ele) => {

//                 var text = ele.text()

//                 cy.log(text)

//                 expect(text).to.equal("6199.25")
//             })

//             cy.get('td').eq(0).should('contain.text', 'Bajaj Finance')


// })
// })
// })