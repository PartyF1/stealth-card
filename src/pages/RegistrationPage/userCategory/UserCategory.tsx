import { DefaultContent } from "../../../components/DefaultContent";
import { Dimension } from "../../../shared/types/enums";
import { Button, ButtonType } from "../../../shared/ui/Button";
import { Actions } from "../../WelcomePage/WelcomePage.styled";
import type { userCategory } from "../RegistrationPage";

export const UserCategory = (setUserCategory: CallableFunction) => {
  const handleOnClick = (userCategory: userCategory) => {
    setUserCategory(userCategory);
  };

  return {
    mainContent: {
      header: <></>,
      content: (
        <DefaultContent title="ДОБРО ПОЖАЛОВАТЬ В CHECKMATE">
          <Actions>
            <Button
              dimension={Dimension.WIDE}
              type={ButtonType.PRIMARY}
              onClick={() => handleOnClick("business")}
            >
              Для бизнеса
            </Button>
            <Button
              dimension={Dimension.WIDE}
              type={ButtonType.SECONDARY}
              onClick={() => handleOnClick("executor")}
            >
              Для исполнителя
            </Button>
          </Actions>
        </DefaultContent>
      ),
      footer: <></>,
    },
  };
};
