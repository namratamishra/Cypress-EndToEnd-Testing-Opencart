Cypress.Commands.add('login',(email,password)=>{
    cy.visit('');//picking base url from config file.
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
    cy.get('input.btn.btn-primary').click();

})