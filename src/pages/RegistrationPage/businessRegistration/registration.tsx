import { useMemo, useState } from "react";
import { usePersonalData } from "./steps/personalData/personalData";
import { BUSINESS_STEPS } from "../../../shared/types/enums";
import { useCreditCompany } from "./steps/creditCompany/creditCompany";
import { SideMenu } from "../../../shared/ui/Menu";
import type { IBusinessRegistrationData } from "../../../shared/types/registration";
import { UserType } from "../../../shared/types/user";
import { useCreateOffer } from "../../../components/CreateOrder";
import { useAuth } from "../../../app/providers/AuthProvider/context";
import { useUser } from "../../../app/providers/UserProvider/context";

export const useBusinessRegistrationAggregator = () => {
  const { login } = useAuth();
  const { setUser } = useUser();
  const [form, setForm] = useState<IBusinessRegistrationData>({
    type: UserType.BUSINESS,
    currentStep: BUSINESS_STEPS.CREATE_ACCOUNT,
    email: "",
    password: "",
    approvePassword: "",
    name: "",
    scopeOfActivity: "",
    region: "",
    contacts: "",
    egrulExtractNumber: "",
    registrationCertificateNumber: "",
    inn: "",
    powerOfAttorney: "",
  });

  const handleCompleteRegistration = async () => {
    if (form?.token) {
      login(form.token);
      setUser(form.user);
    }
  };

  const personalDataStep = usePersonalData({ form, onChange: setForm });
  const creditCompanyDataStep = useCreditCompany({ form, onChange: setForm });
  const firstOrderStep = useCreateOffer(
    form?.id ?? "",
    handleCompleteRegistration
  );

  const mainContent = useMemo(() => {
    switch (form.currentStep) {
      case BUSINESS_STEPS.CREATE_ACCOUNT:
        return personalDataStep;
      case BUSINESS_STEPS.CREDIT_COMPANY:
        return creditCompanyDataStep;
      case BUSINESS_STEPS.FIRST_ORDER:
        return firstOrderStep;
    }
  }, [
    form.currentStep,
    personalDataStep,
    creditCompanyDataStep,
    firstOrderStep,
  ]);

  const sideContent = useMemo(() => {
    return (
      <SideMenu
        activeElement={form.currentStep}
        elements={[
          { id: BUSINESS_STEPS.CREATE_ACCOUNT, title: "СОЗДАЙТЕ АККАУНТ" },
          { id: BUSINESS_STEPS.CREDIT_COMPANY, title: "АККРЕДИТУЙТЕ КОМПАНИЮ" },
          {
            id: BUSINESS_STEPS.FIRST_ORDER,
            title: "СОЗДАЙТЕ СВОЙ ПЕРВЫЙ ЗАКАЗ",
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
