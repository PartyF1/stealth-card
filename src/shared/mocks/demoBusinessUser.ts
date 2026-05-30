import { DEMO_AUTO_LOGIN } from "../config/demo";
import { UserType, type User } from "../types/user";

export const DEMO_TOKEN = "demo-business-token";

export const DEMO_BUSINESS_USER: User = {
  id: "demo-business-1",
  email: "demo@checkmate.ru",
  password: "",
  type: UserType.BUSINESS,
  token: DEMO_TOKEN,
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

export const seedDemoSessionIfNeeded = (): void => {
  if (!DEMO_AUTO_LOGIN || localStorage.getItem("token")) {
    return;
  }

  localStorage.setItem("token", DEMO_TOKEN);
  localStorage.setItem("user", JSON.stringify(DEMO_BUSINESS_USER));
};
