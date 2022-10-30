/// <reference types="cypress" />


context('Actions', () => {
    beforeEach(()=>{
        cy.visit("https://petstore.octoperf.com/actions/Account.action;jsessionid=D28115EB261C19F470EAA16DAF4DF8E8?signonForm=")

})

it("type",function(){
    cy.login("admin","12345");
    cy.wait(500)

    cy.login("admin","admin");
cy.get('#QuickLinks > [href="/actions/Catalog.action?viewCategory=&categoryId=REPTILES"] > img').click();
cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
cy.get(":nth-child(2) > :nth-child(5) > .Button").click();
cy.get('[href="/actions/Order.action?newOrderForm="]').click();
cy.get(':nth-child(14) > td > input').click();
cy.get('[name="newOrder"]').click();
cy.get('[name="newOrder"]').click();
cy.get('.Button').click();
cy.get('#BackLink > a').click();

})



})