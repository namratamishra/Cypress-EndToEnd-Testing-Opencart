export class registerPage {
  weblocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    passwordConfirm: "#input-confirm",
    policyCheckbox: 'input[type="checkbox"]',
    continue: ".btn.btn-primary",
    successMessage: '#content>h1'
  };

  openUrl() {
    cy.visit(Cypress.env("URL"));
  }
  enterFirstname(Fname) {
    cy.get(this.weblocators.firstName).type(Fname);
  }
  enterlastName(Lname) {
    cy.get(this.weblocators.lastName).type(Lname);
  }
  enterEmail(Email) {
    cy.get(this.weblocators.email).type(Email);
  }
  enterTelephone(PhoneNo) {
    cy.get(this.weblocators.telephone).type(PhoneNo);
  }
  enterPassword(Password) {
    cy.get(this.weblocators.password).type(Password);
    cy.get(this.weblocators.passwordConfirm).type(Password)
  }
  selectCheckbox() {
    cy.get(this.weblocators.policyCheckbox).check();
  }
  clickOnContinue() {
    cy.get(this.weblocators.continue).click();
  }
  verifyAccountCreationMessage(){
   cy.get(this.weblocators.successMessage).should('contain','Your Account Has Been Created!')
  }
}
