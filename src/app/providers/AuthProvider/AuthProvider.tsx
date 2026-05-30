import { useEffect, useState } from "react";
import { seedDemoSessionIfNeeded } from "../../../shared/mocks/demoBusinessUser";
import { AuthContext } from "./context";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    seedDemoSessionIfNeeded();
    const token = localStorage.getItem("token");
    setIsAuth(Boolean(token));
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
