
import { successFullMessage, mandatoryFieldMessageEmail, mandatoryFieldMessageFName, mandatoryFieldMessageLName, mandatoryFieldMessagePassword, mandatoryFieldMessagePhone, mandatoryFieldMessagePolicy } from "../utilities/commanUtilities"
export class registerPage {
  weblocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    passwordConfirm: "#input-confirm",
    policyCheckbox: 'input[type="checkbox"]',
    radioButton: '.radio-inline>input[value="0"]',
    //radioButton:'.col-sm-10 >:nth-child(2)>input',
    continue: ".btn.btn-primary",
    successMessage: '#content> :nth-child(2)',
    warning: '.alert.alert-danger.alert-dismissible',

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
  selectRadioButton(){
    cy.get(this.weblocators.radioButton)
  }
  clickOnContinue() {
    cy.get(this.weblocators.continue).click();
  }
  verifyAccountCreationMessage() {
    // cy.get(this.weblocators.successMessage).should('have.text', successFullMessage)
    cy.get(this.weblocators.successMessage).invoke('text').then((text)=>{
      expect(text.includes(successFullMessage));
    })
  }
  verifyMandatoryFieldMessage() {
    cy.get('div.col-sm-10> div.text-danger').invoke('text').then((text) => {
      expect(text.includes(mandatoryFieldMessageFName));
      expect(text.includes(mandatoryFieldMessageLName));
      expect(text.includes(mandatoryFieldMessageEmail));
      expect(text.includes(mandatoryFieldMessagePhone));
      expect(text.includes(mandatoryFieldMessagePassword));

    })
    cy.get('.alert').invoke('text').then((text) => {
      expect(text.includes(mandatoryFieldMessagePolicy));
    })

  }
}
