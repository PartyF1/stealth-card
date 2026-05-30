import type { IFormData } from "../../../../../shared/types/formData";

export const creditCompany: IFormData = {
  title: "ЗАПОЛНИТЕ ДАННЫЕ",
  fields: [
    {
      label: "Номер выписки ЕГРЮЛ",
      key: "egrulExtractNumber",
    },
    {
      label: "Номер свидетельства о регистрации",
      key: "registrationCertificateNumber",
    },
    {
      label: "ИНН",
      key: "inn",
    },
    {
      label: "Доверенность",
      key: "powerOfAttorney",
    },
  ],
};
