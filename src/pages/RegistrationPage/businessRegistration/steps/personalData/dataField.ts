import type { IFormData } from "../../../../../shared/types/formData";

export const personalData: IFormData = {
  title: "Создайте аккаунт",
  fields: [
    {
      label: "E-mail",
      key: "email",
    },
    {
      label: "Пароль",
      key: "password",
      type: "password",
    },
    {
      label: "Повторите пароль",
      key: "approvePassword",
      type: "password",
    },
  ],
};

export const companyData: IFormData = {
  title: "РАССКАЖИТЕ О БИЗНЕСЕ",
  fields: [
    {
      label: "Название компании",
      key: "name",
    },
    {
      label: "Сфера деятельности",
      key: "scopeOfActivity",
    },
    {
      label: "Город и регион",
      key: "region",
    },
    {
      label: "Контакты для связи",
      key: "contacts",
    },
  ],
};
