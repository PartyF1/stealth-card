import { Dimension } from "../../../../../shared/types/enums";
import { Button, ButtonType } from "../../../../../shared/ui/Button";
import type { IStepData } from "../types";
import { BUSINESS_STEPS } from "../../../../../shared/types/enums";
import { ButtonContainer } from "../../../ui/ButtonContainer/ButtonContainer.styled";
import { DefaultForm } from "../../../../../components/Form/DefaultForm";
import { creditCompany } from "./dataField";
import type { IBusinessRegistrationData } from "../../../../../shared/types/registration";
import { registerUser } from "../../../service/RegistrationService";

export const useCreditCompany = ({
  onChange,
  form,
}: IStepData<IBusinessRegistrationData>) => {
  const handleOnClick = async () => {
    const response = await registerUser(form);
    onChange({
      ...response,
      currentStep: BUSINESS_STEPS.FIRST_ORDER,
    });
  };

  return {
    header: <></>,
    content: (
      <DefaultForm onChange={onChange} formData={creditCompany} form={form} />
    ),
    footer: (
      <ButtonContainer>
        <Button
          dimension={Dimension.NARROW}
          type={ButtonType.SECONDARY}
          onClick={handleOnClick}
        >
          Отправить на обработку
        </Button>
      </ButtonContainer>
    ),
  };
};
