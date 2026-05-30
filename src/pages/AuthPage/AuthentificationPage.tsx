import { memo, useState } from "react";
import TemplatePage from "../TemplatePage";
import { DefaultForm } from "../../components/Form";
import { ButtonContainer } from "../RegistrationPage/ui/ButtonContainer/ButtonContainer.styled";
import { Button, ButtonType } from "../../shared/ui/Button";
import { Dimension } from "../../shared/types/enums";
import { authDataField } from "./dataField";
import { login as loginRequest } from "./service/AuthService";
import { useAuth } from "../../app/providers/AuthProvider/context";
import { useUser } from "../../app/providers/UserProvider/context";

const AuthentificationPage = memo(() => {
  const { login } = useAuth();
  const { setUser } = useUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const response = await loginRequest(form);
    if (response.token) {
      login(response.token);
      setUser(response);
    }
  };

  return (
    <TemplatePage
      mainContent={{
        header: <></>,
        content: (
          <DefaultForm
            onChange={setForm}
            formData={authDataField}
            form={form}
          />
        ),
        footer: (
          <ButtonContainer>
            <Button
              dimension={Dimension.NARROW}
              type={ButtonType.SECONDARY}
              onClick={handleLogin}
            >
              ВОЙТИ
            </Button>
          </ButtonContainer>
        ),
      }}
    />
  );
});

export default AuthentificationPage;
