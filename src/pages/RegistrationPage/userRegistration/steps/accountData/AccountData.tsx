import { DefaultForm } from "../../../../../components/Form";
import { Dimension, SHOPPER_STEPS } from "../../../../../shared/types/enums";
import type { IUserRegistrationData } from "../../../../../shared/types/registration";
import { Button, ButtonType } from "../../../../../shared/ui/Button";
import { personalData } from "../../../businessRegistration/steps/personalData/dataField";
import type { IStepData } from "../../../businessRegistration/steps/types";
import { ButtonContainer } from "../../../ui/ButtonContainer/ButtonContainer.styled";

export const useAccountData = ({
  onChange,
  form,
}: IStepData<IUserRegistrationData>) => {
  const handleOnClick = () => {
    onChange({
      ...form,
      currentStep: SHOPPER_STEPS.PERSONAL_INFORMATION,
    });
  };

  return {
    header: <></>,
    content: (
      <DefaultForm onChange={onChange} formData={personalData} form={form} />
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
