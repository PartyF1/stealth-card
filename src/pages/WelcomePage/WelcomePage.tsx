import { memo } from "react";
import {
  ProductAboutContent,
  ProductDetailsContent,
} from "../../components/ProductInfoContent";
import foundationLogo from "../../assets/foundation.svg";
import { Button, ButtonType } from "../../shared/ui/Button";
import { Dimension } from "../../shared/types/enums";
import { useNavigate } from "react-router-dom";
import {
  ContentRow,
  DirectorContact,
  FoundationLogo,
  LogoGroup,
  MainColumn,
  PageShell,
  ProjectLogo,
  SideBody,
  SideColumn,
  SideFooter,
  Splitter,
  SplitterLine,
  WelcomeHeader,
} from "./WelcomePage.styled";

const WelcomePage = memo(() => {
  const navigate = useNavigate();

  return (
    <PageShell>
      <WelcomeHeader>
        <LogoGroup>
          <ProjectLogo>STEALTHINSIDE</ProjectLogo>
          <FoundationLogo src={foundationLogo} alt="Фонд содействия инновациям" />
        </LogoGroup>
        <Button
          dimension={Dimension.NARROW}
          type={ButtonType.PRIMARY}
          onClick={() => navigate("/login")}
        >
          Войти
        </Button>
      </WelcomeHeader>

      <ContentRow>
        <SideColumn>
          <SideBody>
            <ProductAboutContent />
          </SideBody>
          <SideFooter>
            <DirectorContact>Ген. директор: +7 950 166 3763</DirectorContact>
          </SideFooter>
        </SideColumn>

        <Splitter>
          <SplitterLine />
          <SplitterLine />
          <SplitterLine />
        </Splitter>

        <MainColumn>
          <ProductDetailsContent />
        </MainColumn>
      </ContentRow>
    </PageShell>
  );
});

export default WelcomePage;
