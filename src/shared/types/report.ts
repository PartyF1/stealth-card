import type { REPORT_STEPS } from "./enums";

export interface IReport {
  id: string;
  chatId?: string;
  date: string;
  employees: string;
  appearance: string;
  greetings: string;
  initiative: string;
  politeness: string;
  observations: string;
  currentStep: REPORT_STEPS;
}
