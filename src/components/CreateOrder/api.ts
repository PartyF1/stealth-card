import api from "../../shared/lib/axios";
import { isDemoSession } from "../../shared/mocks/isDemoSession";
import { createDemoOffer } from "../../shared/mocks/demoStore";
import type { IOfferData } from "./CreateOrder";

export const createOffer = async (offerData: IOfferData, userId: string) => {
  const { name, ...details } = offerData;

  const formattedDetails = {
    description: {
      title: "Описание",
      value: details.description,
    },
    conditions: {
      title: "Условия",
      value: details.conditions,
    },
    location: {
      title: "Расположение",
      value: details.location,
    },
    cost: {
      title: "Оплата",
      value: details.cost,
    },
  };

  if (isDemoSession()) {
    return createDemoOffer(name ?? "Новое предложение", userId, formattedDetails);
  }

  const response = await api.post("/offers", {
    name,
    userId,
    details: formattedDetails,
  });

  return response.data;
};
