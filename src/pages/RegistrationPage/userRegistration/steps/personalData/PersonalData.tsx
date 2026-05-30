import { DefaultForm } from "../../../../../components/Form";
import { ButtonType, Dimension } from "../../../../../shared/types/enums";
import type { IUserRegistrationData } from "../../../../../shared/types/registration";
import { Button } from "../../../../../shared/ui/Button";
import type { IStepData } from "../../../businessRegistration/steps/types";
import { ButtonContainer } from "../../../ui/ButtonContainer/ButtonContainer.styled";
import { personalData } from "./dataField";
import { useAuth } from "../../../../../app/providers/AuthProvider/context";
import { useUser } from "../../../../../app/providers/UserProvider/context";
import { registerUser } from "../../../service/RegistrationService";

export const usePersonalData = ({
  onChange,
  form,
}: IStepData<IUserRegistrationData>) => {
  const { login } = useAuth();
  const { setUser } = useUser();
  const handleOnClick = async () => {
    const response = await registerUser(form);
    if (response.token) {
      login(response.token);
      setUser(response);
    }
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
          Отправить
        </Button>
      </ButtonContainer>
    ),
  };
};
