import api from "../../../shared/lib/axios";
import type { IReport } from "../../../shared/types/report";
import { isDemoSession } from "../../../shared/mocks/isDemoSession";
import { createDemoReport, getDemoReportByChatId } from "../../../shared/mocks/demoStore";

export const createReport = async (form: IReport, chatId: string) => {
  const { id, currentStep, ...rightForm } = form;
  if (isDemoSession()) {
    console.log({chatId, id, ...rightForm});
    return createDemoReport({chatId: chatId, id: chatId, ...rightForm});
  }
  const response = await api.post("/reports", {
    chatId,
    ...rightForm,
  });
  return response.data;
};

export const getReportByChatId = async (chatId: string) => {
  if (isDemoSession()) {
    return { data: [getDemoReportByChatId(chatId)] };
  }

  return await api.get(`/reports?chatId=${chatId}`);
};

export const getReportById = async (reportId: string) => {
  if (isDemoSession()) {
    return { data: getDemoReportByChatId(reportId) };
  }
  return await api.get(`/reports/${reportId}`);
};
