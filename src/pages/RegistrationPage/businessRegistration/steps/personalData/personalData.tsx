import { Dimension } from "../../../../../shared/types/enums";
import { Button, ButtonType } from "../../../../../shared/ui/Button";
import type { IStepData } from "../types";
import { BUSINESS_STEPS } from "../../../../../shared/types/enums";
import { ButtonContainer } from "../../../ui/ButtonContainer/ButtonContainer.styled";
import { DefaultForm } from "../../../../../components/Form/DefaultForm";
import { companyData, personalData } from "./dataField";
import { useState } from "react";
import type { IBusinessRegistrationData } from "../../../../../shared/types/registration";

type Stage = "user" | "business";

export const usePersonalData = ({
  onChange,
  form,
}: IStepData<IBusinessRegistrationData>) => {
  const [stage, setStage] = useState<Stage>("user");

  const handleOnClick = () => {
    if (stage === "business") {
      onChange({
        ...form,
        currentStep: BUSINESS_STEPS.CREDIT_COMPANY,
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      form.approvePassword === form.password
        ? setStage("business")
        : alert("Введённые пароли не совпадают");
    }
  };

  return {
    header: <></>,
    content: (
      <DefaultForm
        onChange={onChange}
        formData={stage === "business" ? companyData : personalData}
        form={form}
      />
    ),

    footer: (
      <ButtonContainer>
        <Button
          dimension={Dimension.NARROW}
          type={ButtonType.SECONDARY}
          onClick={handleOnClick}
        >
          Продолжить
        </Button>
      </ButtonContainer>
    ),
  };
};
