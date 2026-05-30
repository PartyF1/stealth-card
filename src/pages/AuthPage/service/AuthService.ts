import api from "../../../shared/lib/axios";

export const login = async (form: object) => {
  const response = await api.get("/users", {
    params: { ...form },
  });

  return response.data?.[0];
};
