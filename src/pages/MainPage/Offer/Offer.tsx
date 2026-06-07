import { memo, useEffect, useState } from "react";
import TemplatePage from "../../TemplatePage";
import { useNavigate, useParams } from "react-router-dom";
import { DefaultContent } from "../../../components/DefaultContent";
import { Title } from "../../../shared/ui/Menu/MenuElement/MenuElement.styled";
import { createOrder, getOfferData } from "../service/OfferService";
import { InfoData, InfoTitle, InfoWrapper } from "./Offer.styled";
import type { IOfferElement } from "../../../components/OfferList/OfferList";
import { ButtonContainer } from "../../RegistrationPage/ui/ButtonContainer/ButtonContainer.styled";
import { Button, ButtonType } from "../../../shared/ui/Button";
import { Dimension } from "../../../shared/types/enums";
import { useUser } from "../../../app/providers/UserProvider/context";
import { UserType } from "../../../shared/types/user";

export const OfferPage = memo(() => {
  const { offerId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();
  const [offerData, setOfferData] = useState<IOfferElement>();

  const refreshData = async () => {
    if (offerId) {
      try {
        const response = await getOfferData(offerId);
        setOfferData(response);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshData();
  }, []);

  const handleCreateOrder = async () => {
    if (offerId && user?.id && offerData?.user.id) {
      const response = await createOrder(
        offerId,
        user.id,
        offerData.user.id
      );

      if (response?.data) {
        navigate(`/orders/${response.data.id}`);
      }
    }
  };

  const canRespond =
    user?.type === UserType.MYSTERY_SHOPPER &&
    offerData?.user.type === UserType.BUSINESS;

  return (
    <TemplatePage
      mainContent={{
        header: <Title>{offerData?.user?.name ?? ""}</Title>,
        content: (
          <DefaultContent title={offerData?.name}>
            {offerData &&
              Object.values(offerData?.details).map((detail) => (
                <InfoWrapper key={detail?.title}>
                  <InfoTitle>{detail?.title}</InfoTitle>
                  <InfoData>{detail?.value}</InfoData>
                </InfoWrapper>
              ))}
          </DefaultContent>
        ),
        footer: canRespond ? (
          <ButtonContainer>
            <Button
              dimension={Dimension.NARROW}
              type={ButtonType.SECONDARY}
              onClick={handleCreateOrder}
            >
              ОТКЛИКНУТЬСЯ
            </Button>
          </ButtonContainer>
        ) : (
          <></>
        ),
      }}
    />
  );
});

export default OfferPage;
