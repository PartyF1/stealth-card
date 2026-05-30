import { useEffect, useState } from "react";
import type { User } from "../../../shared/types/user";
import { UserContext } from "./context";

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) {
      setUser(JSON.parse(raw));
    }
  }, []);

  const updateUser = (data: User | null) => {
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      localStorage.removeItem("user");
    }
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
