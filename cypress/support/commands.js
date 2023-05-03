// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types ="Cypress" />
import 'cypress-file-upload';

// custom mthd writing steps
// Cypress.Commands.add("clickonelement", (element) => {
// if(element.includes("//")) {
//     cy.xpath(element).click({multiple: true});
// }
// else{
//     cy.get(element).click({multiple: true});
// }
// })

// Cypress.Commands.add("AttributeValidate",(element, attribute, value) => {
//     if (element.includes("//")) {
//         cy.xpath(element).should('have.attr', attribute, value)
//     }
//     else{
//         cy.get(element).should('have.attr', attribute, value)
//     }
//})