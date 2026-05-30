import type { IFormData } from "../../../../../shared/types/formData";

export const personalData: IFormData = {
  title: "РАССКАЖИТЕ О СЕБЕ",
  fields: [
    {
      label: "ФИО",
      key: "name",
    },
    {
      label: "Дата рождения",
      key: "birthDate",
    },
    {
      label: "Город и регион",
      key: "location",
    },
  ],
};
