import {
  CreateOrder,
  Footer,
  MenuItem,
  MenuList,
  MenuTitle,
  Drawer,
  MenuHeader,
  Overlay,
} from "./MainMenu.styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { useAuth } from "../../app/providers/AuthProvider/context";
import { useUser } from "../../app/providers/UserProvider/context";
import { UserType } from "../../shared/types/user";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    setUser(null);
  };
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />

      <Drawer $isOpen={isOpen}>
        <MenuHeader>
          <MenuTitle>МЕНЮ</MenuTitle>
          <Button onClick={handleLogout}>ВЫЙТИ</Button>
        </MenuHeader>

        <MenuList>
          <MenuItem onClick={() => navigate("/profile")}>Мой профиль</MenuItem>
          <MenuItem onClick={() => navigate("/offers")}>
            Мои предложения
          </MenuItem>
          <MenuItem onClick={() => navigate("/orders")}>Мои заказы</MenuItem>
        </MenuList>

        <Footer>
          {user?.type === UserType.BUSINESS && (
            <CreateOrder onClick={() => navigate("/create-offer")}>
              + Создать предложение
            </CreateOrder>
          )}
        </Footer>
      </Drawer>
    </>
  );
};
