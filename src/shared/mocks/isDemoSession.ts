import { DEMO_TOKENS } from "./demoUsers";

export const isDemoSession = (): boolean => {
  const token = localStorage.getItem("token");
  return Boolean(token && DEMO_TOKENS.includes(token as (typeof DEMO_TOKENS)[number]));
};
