import { memo } from "react";
import TemplatePage from "../TemplatePage";
import { DefaultContent } from "../../components/DefaultContent";
import { Button, ButtonType } from "../../shared/ui/Button";
import { Actions } from "./WelcomePage.styled";
import { Dimension } from "../../shared/types/enums";
import { useNavigate } from "react-router-dom";

const WelcomePage = memo(() => {
  const navigate = useNavigate();

  return (
    <TemplatePage
      mainContent={{
        header: <></>,
        content: (
          <DefaultContent title="ДОБРО ПОЖАЛОВАТЬ В CHECKMATE">
            <Actions>
              <Button
                dimension={Dimension.WIDE}
                type={ButtonType.PRIMARY}
                onClick={() => navigate("/login")}
              >
                Войти
              </Button>
              <Button
                dimension={Dimension.WIDE}
                type={ButtonType.SECONDARY}
                onClick={() => navigate("/registration")}
              >
                Зарегистрироваться
              </Button>
            </Actions>
          </DefaultContent>
        ),
        footer: <></>,
      }}
    />
  );
});

export default WelcomePage;
