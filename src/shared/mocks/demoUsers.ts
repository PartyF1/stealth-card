import { UserType, type User } from "../types/user";

export const DEMO_BUSINESS_TOKEN = "demo-business-token";
export const DEMO_SHOPPER_TOKEN = "demo-shopper-token";

export const DEMO_TOKENS = [DEMO_BUSINESS_TOKEN, DEMO_SHOPPER_TOKEN] as const;

export const TEST_BUSINESS_USER: User = {
  id: "test-business-1",
  email: "demo-business@stealthinside.ru",
  password: "",
  type: UserType.BUSINESS,
  token: DEMO_BUSINESS_TOKEN,
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

export const TEST_SHOPPER_USER: User = {
  id: "test-shopper-1",
  email: "demo-shopper@stealthinside.ru",
  password: "",
  type: UserType.MYSTERY_SHOPPER,
  token: DEMO_SHOPPER_TOKEN,
  name: "Николай Васильевич",
  details: {
    location: "Москва",
    birthDate: "1990-05-12",
  },
};

export const getDemoUserByToken = (token: string): User | undefined => {
  if (token === DEMO_BUSINESS_TOKEN) return TEST_BUSINESS_USER;
  if (token === DEMO_SHOPPER_TOKEN) return TEST_SHOPPER_USER;
  return undefined;
};
