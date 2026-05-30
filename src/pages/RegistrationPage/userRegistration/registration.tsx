import { useMemo, useState } from "react";
import { SHOPPER_STEPS } from "../../../shared/types/enums";
import { SideMenu } from "../../../shared/ui/Menu";
import { UserType } from "../../../shared/types/user";
import type { IUserRegistrationData } from "../../../shared/types/registration";
import { useAccountData } from "./steps/accountData/AccountData";
import { usePersonalData } from "./steps/personalData/PersonalData";

export const useShopperRegistrationAggregator = () => {
  const [form, setForm] = useState<IUserRegistrationData>({
    type: UserType.MYSTERY_SHOPPER,
    currentStep: SHOPPER_STEPS.CREATE_ACCOUNT,
    email: "",
    password: "",
    approvePassword: "",
    name: "",
    location: "",
    birthDate: "",
  });

  const accountDataStep = useAccountData({ form, onChange: setForm });
  const personalDataStep = usePersonalData({ form, onChange: setForm });

  const mainContent = useMemo(() => {
    switch (form.currentStep) {
      case SHOPPER_STEPS.CREATE_ACCOUNT:
        return accountDataStep;
      case SHOPPER_STEPS.PERSONAL_INFORMATION:
        return personalDataStep;
    }
  }, [form.currentStep, accountDataStep, personalDataStep]);

  const sideContent = useMemo(() => {
    return (
      <SideMenu
        activeElement={form.currentStep}
        elements={[
          { id: SHOPPER_STEPS.CREATE_ACCOUNT, title: "СОЗДАЙТЕ АККАУНТ" },
          {
            id: SHOPPER_STEPS.PERSONAL_INFORMATION,
            title: "РАССКАЖИТЕ О СЕБЕ",
          },
        ]}
      />
    );
  }, [form.currentStep]);

  return {
    ...(mainContent && { mainContent }),
    sideContent: {
      content: sideContent,
    },
  };
};
