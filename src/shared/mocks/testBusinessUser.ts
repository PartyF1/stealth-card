import { UserType, type User } from "../types/user";

export const TEST_TOKEN = "test-business-token";

export const TEST_BUSINESS_USER: User = {
  id: "test-business-1",
  email: "demo@stealthinside.ru",
  password: "",
  type: UserType.BUSINESS,
  token: TEST_TOKEN,
  name: "ООО «Демо Компания»",
  details: {
    scopeOfActivity: "Розничная торговля",
    region: "Москва",
    contacts: "+7 (495) 000-00-00",
    egrulExtractNumber: "ДЕМО-ЕГРЮЛ-001",
    registrationCertificateNumber: "ДЕМО-СВ-001",
    inn: "7700000000",
    powerOfAttorney: "Не требуется",
  },
};
