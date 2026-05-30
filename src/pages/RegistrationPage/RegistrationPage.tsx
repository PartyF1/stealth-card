import { memo, useMemo, useState } from "react";
import TemplatePage from "../TemplatePage";
import { UserCategory } from "./userCategory/UserCategory";
import { useBusinessRegistrationAggregator } from "./businessRegistration/registration";
import { useShopperRegistrationAggregator } from "./userRegistration/registration";

export type userCategory = "business" | "executor" | null;

const RegistrationPage = memo(() => {
  const [userCategory, setUserCategory] = useState<userCategory>(null);
  const businessRegistration = useBusinessRegistrationAggregator();
  const shopperRegistration = useShopperRegistrationAggregator();

  const currentView = useMemo(() => {
    switch (userCategory) {
      case "business":
        return businessRegistration;
      case "executor":
        return shopperRegistration;
      default:
        return UserCategory(setUserCategory);
    }
  }, [
    userCategory,
    setUserCategory,
    businessRegistration,
    shopperRegistration,
  ]);

  return (
    <>
      <TemplatePage {...currentView}></TemplatePage>
    </>
  );
});

export default RegistrationPage;
