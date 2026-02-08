import { memo } from "react";
import TemplatePage from "../TemplatePage";
import { DefaultContent } from "../../components/DefaultContent";
import { Button, ButtonType } from "../../shared/ui/Button";
import { Actions } from "./WelcomePage.styled";
import { Dimension } from "../../shared/types/enums";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/foundation.svg";
import { Container } from "../../components/DefaultContent/DefaultContent.styled";

const WelcomePage = memo(() => {
  const navigate = useNavigate();

  const mainContent = {
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
  };

  return (
    <TemplatePage
      mainContent={mainContent}
      sideContent={{
        content: (
          <DefaultContent>
            <span>
              Проект создан при поддержке Федерального государственного бюджетного учреждения «Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства".
            </span>
            <img src={logo} style={{ maxWidth: 300 }} />
          </DefaultContent>
        ),
        footer: <Container>Ген. директор: +7 950 166 3763</Container>,
      }}
    />
  );
});

export default WelcomePage;
