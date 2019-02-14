/**
  This file contains all constants used in regstration page aside from class.

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/14/2019
*/
export const firstPartStateNames = {
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
  typeInChurchName: "typeInChurchName"
};

export const secondPartStateNames = {
  lodgingOptions: "lodgingOptions",
  selectShirtSize: "selectShirtSize",
  selectVolunteerOption: "selectVolunteerOption",
  healthCondition: "healthCondition",
  prayerTopic: "prayerTopic",
  paymentMethods: "paymentMethods",
  cardNumber: "cardNumber",
  expirationDate: "expirationDate",
  securityCode: "securityCode",
  saveCardCheckBox: "saveCardCheckBox",
  billingAddressCheckBox: "billingAddressCheckBox",
  billingAddressFirstName: "billingAddressFirstName",
  billingAddressLastName: "billingAddressLastName",
  billingAddressStreetAddress: "billingAddressStreetAddress",
  billingAddressCompanyAptEtc: "billingAddressCompanyAptEtc",
  billingAddressCity: "billingAddressCity",
  billingAddressState: "billingAddressState",
  billingAddressPostalCode: "billingAddressPostalCode"

}

// creating keys this way so that the ids used in child components are consistent
// with corresponding state names

export const firstPartStates = {
  [firstPartStateNames.schoolName]: "",
  [firstPartStateNames.gradeLevel]: "",
  [firstPartStateNames.major]: "",
  [firstPartStateNames.selectAreaOfInterest]: "",
  [firstPartStateNames.company]: "",
  [firstPartStateNames.title]: "",
  [firstPartStateNames.firstName]: "",
  [firstPartStateNames.lastName]: "",
  [firstPartStateNames.koreanName]: "",
  [firstPartStateNames.date]: "",
  [firstPartStateNames.selectGender]: "",
  [firstPartStateNames.selectLanguage]: "",
  [firstPartStateNames.selectTrainingLevel]: "",
  [firstPartStateNames.selectChurchName]: "",
  [firstPartStateNames.typeInChurchName]: ""
};

export const secondPartStates = {
  [secondPartStateNames.lodgingOptions]: "",
  [secondPartStateNames.selectShirtSize]: "",
  [secondPartStateNames.selectVolunteerOption]: "",
  [secondPartStateNames.healthCondition]: "",
  [secondPartStateNames.prayerTopic]: "",
  [secondPartStateNames.paymentMethod]: "",
  [secondPartStateNames.cardNumber]: "",
  [secondPartStateNames.expirationDate]: "",
  [secondPartStateNames.securityCode]: "",
  [secondPartStateNames.saveCardCheckBox]: false,
  [secondPartStateNames.billingAddressCheckBox]: false,
  [secondPartStateNames.billingAddressFirstName]: "",
  [secondPartStateNames.billingAddressLastName]: "",
  [secondPartStateNames.billingAddressStreetAddress]: "",
  [secondPartStateNames.billingAddressCompanyAptEtc]: "",
  [secondPartStateNames.billingAddressCity]: "",
  [secondPartStateNames.billingAddressState]: "",
  [secondPartStateNames.billingAddressPostalCode]: ""
}
