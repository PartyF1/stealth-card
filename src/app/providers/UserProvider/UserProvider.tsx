import { useState } from "react";
import type { User } from "../../../shared/types/user";
import { UserContext } from "./context";
import { UserType } from "../../../shared/types/user";

const demoUser: User = {
  id: "1",
  type: UserType.BUSINESS,
  name: "Demo Company",
  email: "demo@checkmate.ru",
  details: {
    scopeOfActivity: "Розничная торговля",
    region: "Москва",
    contacts: "+7 999 999 99 99",
  },
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(demoUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
