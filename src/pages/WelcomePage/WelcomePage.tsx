import { memo, useState } from "react";
import {
  ProductAboutContent,
  ProductDetailsContent,
} from "../../components/ProductInfoContent";
import foundationLogo from "../../assets/foundation.svg";
import { Button, ButtonType } from "../../shared/ui/Button";
import { Modal } from "../../shared/ui/Modal";
import { Dimension } from "../../shared/types/enums";
import { useAuth } from "../../app/providers/AuthProvider/context";
import { useUser } from "../../app/providers/UserProvider/context";
import {
  TEST_BUSINESS_USER,
  TEST_SHOPPER_USER,
} from "../../shared/mocks/demoUsers";
//import { resetDemoStore } from "../../shared/mocks/demoStore";
import type { User } from "../../shared/types/user";
import {
  ContentRow,
  DirectorContact,
  FoundationLogo,
  LoginModalActions,
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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleDemoLogin = (demoUser: User) => {
    //resetDemoStore();
    login(demoUser.token);
    setUser(demoUser);
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <PageShell>
        <WelcomeHeader>
          <LogoGroup>
            <ProjectLogo>STEALTHINSIDE</ProjectLogo>
            <FoundationLogo src={foundationLogo} alt="Фонд содействия инновациям" />
          </LogoGroup>
          <Button
            dimension={Dimension.NARROW}
            type={ButtonType.PRIMARY}
            onClick={() => setIsLoginModalOpen(true)}
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

      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Вход в демо"
      >
        <LoginModalActions>
          <Button
            dimension={Dimension.WIDE}
            type={ButtonType.PRIMARY}
            onClick={() => handleDemoLogin(TEST_BUSINESS_USER)}
          >
            Войти как бизнес
          </Button>
          <Button
            dimension={Dimension.WIDE}
            type={ButtonType.SECONDARY}
            onClick={() => handleDemoLogin(TEST_SHOPPER_USER)}
          >
            Войти как тайный покупатель
          </Button>
        </LoginModalActions>
      </Modal>
    </>
  );
});

export default WelcomePage;
