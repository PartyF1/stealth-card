import api from "../../../shared/lib/axios";
import { isDemoSession } from "../../../shared/mocks/isDemoSession";
import {
  createDemoChat,
  getDemoOfferById,
  getDemoOffers,
} from "../../../shared/mocks/demoStore";

export const getOffers = async (type: string) => {
  if (isDemoSession()) {
    return getDemoOffers(type);
  }

  const response = await api.get("/offers", {
    params: {
      _embed: "user",
      "user.type_ne": type,
    },
  });

  return response.data;
};

export const getOfferData = async (offerId: string) => {
  if (isDemoSession()) {
    return getDemoOfferById(offerId);
  }

  const response = await api.get(`/offers/${offerId}`, {
    params: {
      _embed: "user",
    },
  });

  return response.data;
};

export const createOrder = async (
  offerId: string,
  executorId: string,
  businessId: string
) => {
  if (isDemoSession()) {
    const chat = createDemoChat(offerId, executorId, businessId);
    return { data: chat };
  }

  return await api.post(`/chats`, {
    offerId,
    mystery_shopper: executorId,
    business: businessId,
  });
};
