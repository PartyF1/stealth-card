import type { IFormData } from "../../shared/types/formData";

export const authDataField: IFormData = {
  title: "ВОЙТИ",
  fields: [
    {
      label: "E-mail",
      key: "email",
      type: "email",
    },
    {
      label: "Пароль",
      key: "password",
      type: "password",
    },
  ],
};
