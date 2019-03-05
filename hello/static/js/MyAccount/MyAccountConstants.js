/**
  Contains all the constants for my account page

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 3/3/19
*/

/**
  This file contains all constants used in regstration page aside from class.

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/14/2019
*/
export const accountProfileStateNames = {
  schoolName: "schoolName",
  gradeLevel: "gradeLevel",
  major: "major",
  selectAreaOfInterest: "selectAreaOfInterest",
  company: "company",
  title: "title",
  firstName: "firstName",
  lastName: "lastName",
  koreanName: "koreanName",
  dob: "dob",
  selectGender: "selectGender",
  selectLanguage: "selectLanguage",
  selectTrainingLevel: "selectTrainingLevel",
  selectChurchName: "selectChurchName",
  typeInChurchName: "typeInChurchName",
  addressFirstName: "addressFirstName",
  addressLastName: "addressLastName",
  addressStreetAddress: "addressStreetAddress",
  addressCompanyAptEtc: "addressCompanyAptEtc",
  addressCity: "addressCity",
  addressState: "addressState",
  addressPostalCode: "addressPostalCode",
  selectChurchPosition: "selectChurchPosition"

}

// creating keys this way so that the ids used in child components are consistent
// with corresponding state names

export const accountProfileStates = {
  [accountProfileStateNames.schoolName]: "",
  [accountProfileStateNames.gradeLevel]: "",
  [accountProfileStateNames.major]: "",
  [accountProfileStateNames.selectAreaOfInterest]: "",
  [accountProfileStateNames.company]: "",
  [accountProfileStateNames.title]: "",
  [accountProfileStateNames.firstName]: "",
  [accountProfileStateNames.lastName]: "",
  [accountProfileStateNames.koreanName]: "",
  [accountProfileStateNames.date]: "",
  [accountProfileStateNames.selectGender]: "",
  [accountProfileStateNames.selectLanguage]: "",
  [accountProfileStateNames.selectTrainingLevel]: "",
  [accountProfileStateNames.selectChurchName]: "",
  [accountProfileStateNames.typeInChurchName]: "",
  [accountProfileStateNames.addressFirstName]: "",
  [accountProfileStateNames.addressLastName]: "",
  [accountProfileStateNames.addressStreetAddress]: "",
  [accountProfileStateNames.addressCompanyAptEtc]: "",
  [accountProfileStateNames.addressCity]: "",
  [accountProfileStateNames.addressState]: "",
  [accountProfileStateNames.addressPostalCode]: "",
  [accountProfileStateNames.selectChurchPosition]: ""

};

export const BASIC_INFORMATION_SECTION = 0;
export const FIELD_INFORMATION_SECTION = 1;
export const CHURCH_INFORMATION_SECTION = 2;
