/// <reference types="cypress" />


context('Actions', () => {
    beforeEach(()=>{
    cy.visit("https://www.google.com")

})

it("type",function(){

    cy.get(".gLFyf")
    .type('fake@email.com{enter}').should('have.value', 'fake@email.com')


})



})
