import api from "../../../shared/lib/axios";
import type { User } from "../../../shared/types/user";

export const registerUser = async (form: User) => {
  const {
    type,
    email,
    password,
    approvePassword,
    name,
    currentStep,
    ...details
  } = form;

  const response = await api.post("/users", {
    type,
    email,
    password,
    name,
    token: "testToken",
    details: {
      ...details,
    },
  });

  return response.data;
};
