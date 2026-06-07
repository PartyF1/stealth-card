import { TEST_TOKEN } from "./testBusinessUser";

export const isDemoSession = (): boolean =>
  localStorage.getItem("token") === TEST_TOKEN;
