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
/*import { Button } from "../../shared/ui/Button";*/
import { useUser } from "../../app/providers/UserProvider/context";
import { UserType } from "../../shared/types/user";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />

      <Drawer $isOpen={isOpen}>
        <MenuHeader>
          <MenuTitle>МЕНЮ</MenuTitle>
        </MenuHeader>

        <MenuList>
          <MenuItem onClick={() => navigate("/orders")}>Мой профиль</MenuItem>
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
