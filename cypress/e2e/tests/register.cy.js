import { registerPage } from "../../pages/registerPage";
const registerObj = new registerPage();
import registerData from "../../fixtures/registerData.json";


describe("Registration functionality", () => {
  it("Validate Registering an Account by providing all the fields", () => {
    registerObj.openUrl();
    registerObj.enterFirstname(registerData.firstName);
    registerObj.enterlastName(registerData.lastName);
    registerObj.enterEmail(registerData.email);
    registerObj.enterTelephone(registerData.telephone);
    registerObj.enterPassword(registerData.password);
    registerObj.selectCheckbox();
    registerObj.clickOnContinue();
    registerObj.verifyAccountCreationMessage();
  });

  it("Validate proper notification messages are displayed for the mandatory fields, when you don't provide any fields in the 'Register Account' page and submit",()=>{
    registerObj.openUrl();
    registerObj.clickOnContinue();
    registerObj.verifyMandatoryFieldMessage();
  })

  it.only("Validate Registering an Account when 'No' option is selected for Newsletter field",()=>{
    registerObj.openUrl();
    registerObj.openUrl();
    registerObj.enterFirstname(registerData.firstName);
    registerObj.enterlastName(registerData.lastName);
    registerObj.enterEmail(registerData.email);
    registerObj.enterTelephone(registerData.telephone);
    registerObj.enterPassword(registerData.password);
    registerObj.selectCheckbox();
    registerObj.selectRadioButton();
    registerObj.clickOnContinue();
    registerObj.verifyAccountCreationMessage();
    
  })
});
