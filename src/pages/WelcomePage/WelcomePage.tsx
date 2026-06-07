import { memo } from "react";
import {
  ProductAboutContent,
  ProductDetailsContent,
} from "../../components/ProductInfoContent";
import foundationLogo from "../../assets/foundation.svg";
import { Button, ButtonType } from "../../shared/ui/Button";
import { Dimension } from "../../shared/types/enums";
import { useAuth } from "../../app/providers/AuthProvider/context";
import { useUser } from "../../app/providers/UserProvider/context";
import { TEST_BUSINESS_USER } from "../../shared/mocks/testBusinessUser";
import { resetDemoStore } from "../../shared/mocks/demoStore";
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
  const { login } = useAuth();
  const { setUser } = useUser();

  const handleTestLogin = () => {
    resetDemoStore();
    login(TEST_BUSINESS_USER.token);
    setUser(TEST_BUSINESS_USER);
  };

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
          onClick={handleTestLogin}
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
