import { memo } from "react";
import TemplatePage from "../TemplatePage";
import {
  ProductAboutContent,
  ProductDetailsContent,
} from "../../components/ProductInfoContent";
import { Button, ButtonType } from "../../shared/ui/Button";
import { DirectorContact, SideFooter } from "./WelcomePage.styled";
import { Dimension } from "../../shared/types/enums";
import { useNavigate } from "react-router-dom";

const WelcomePage = memo(() => {
  const navigate = useNavigate();

  return (
    <TemplatePage
      sideContent={{
        content: <ProductAboutContent />,
        footer: (
          <SideFooter>
            <Button
              dimension={Dimension.NARROW}
              type={ButtonType.PRIMARY}
              onClick={() => navigate("/login")}
            >
              Войти
            </Button>
            <DirectorContact>Ген. директор: +7 950 166 3763</DirectorContact>
          </SideFooter>
        ),
      }}
      mainContent={{
        header: <></>,
        content: <ProductDetailsContent />,
      }}
    />
  );
});

export default WelcomePage;
