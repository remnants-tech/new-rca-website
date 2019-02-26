/**
  This file contains all the constants for create account page, except for css

  @author:Jae Won Kwon
  date:2/16/19
*/

export const createAccountStateNames = {
  email: "email",
  password: "password",
  confirmPassword: "confirmPassword",
  firstName:"firstName",
  lastName:"lastName",
  koreanName:"koreanName",
  dob:"dob",
  selectGender:"selectGender",
  selectPreferredLanguage:"selectPreferredLanguage",
  phoneNumber:"phoneNumber",
  selectAreaOfInterest:"selectAreaOfInterest",
  selectYourChurch:"selectYourChurch",
  typeInChurchName:"typeInChurchName"
};

export const createAccountStates = {
  [createAccountStateNames.email]: "",
  [createAccountStateNames.password]: "",
  [createAccountStateNames.confirmPassword] : "",
  [createAccountStateNames.firstName]: "",
  [createAccountStateNames.lastName] :"",
  [createAccountStateNames.koreanName] : "",
  [createAccountStateNames.dob] : "",
  [createAccountStateNames.selectGender] : "",
  [createAccountStateNames.selectPreferredLanguage] : "",
  [createAccountStateNames.phoneNumber] : "",
  [createAccountStateNames.selectAreaOfInterest] : "",
  [createAccountStateNames.selectYourChurch] : "",
  [createAccountStateNames.typeInChurchName] : ""
};
