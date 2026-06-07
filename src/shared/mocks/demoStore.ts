import type { User } from "../types/user";
import { UserType } from "../types/user";
import { TEST_BUSINESS_USER } from "./testBusinessUser";
import {
  getDemoShopperById,
  getDemoShopperStatus,
  INITIAL_DEMO_CHATS,
  INITIAL_DEMO_MESSAGES,
  INITIAL_DEMO_OFFERS,
  type DemoChat,
  type DemoMessage,
  type DemoOffer,
} from "./demoData";

let offers: DemoOffer[] = [...INITIAL_DEMO_OFFERS];
let chats: DemoChat[] = [...INITIAL_DEMO_CHATS];
let messages: DemoMessage[] = [...INITIAL_DEMO_MESSAGES];

const nextId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

export const resetDemoStore = () => {
  offers = [...INITIAL_DEMO_OFFERS];
  chats = [...INITIAL_DEMO_CHATS];
  messages = [...INITIAL_DEMO_MESSAGES];
};

export const getDemoOffers = (userType: string): DemoOffer[] => {
  if (userType === UserType.BUSINESS) {
    return offers.filter((offer) => offer.userId === TEST_BUSINESS_USER.id);
  }

  return offers.filter((offer) => offer.user.type !== userType);
};

export const getDemoOfferById = (offerId: string): DemoOffer | undefined =>
  offers.find((offer) => offer.id === offerId);

export const getDemoChats = (user: User) => {
  const userChats = chats.filter((chat) => chat[user.type] === user.id);

  return userChats.map((chat) => {
    const counterpartId =
      user.type === UserType.BUSINESS
        ? chat.mystery_shopper
        : chat.business;
    const counterpart = getDemoShopperById(counterpartId) ?? {
      id: counterpartId,
      name: "Участник",
      type: UserType.MYSTERY_SHOPPER,
      email: "",
      password: "",
      token: "",
      details: {},
    };

    return {
      ...chat,
      user: {
        ...counterpart,
        status: getDemoShopperStatus(counterpartId),
      },
    };
  });
};

export const getDemoChatById = (chatId: string) => {
  const chat = chats.find((item) => item.id === chatId);
  if (!chat) return null;

  const shopper = getDemoShopperById(chat.mystery_shopper);
  const chatMessages = messages
    .filter((message) => message.chatId === chatId)
    .map(({ chatId: _, ...message }) => message);

  return {
    ...chat,
    messages: chatMessages,
    user: {
      name: shopper?.name ?? "Тайный покупатель",
      status: getDemoShopperStatus(chat.mystery_shopper),
    },
  };
};

export const addDemoMessage = (
  payload: { text: string; time: string; userId: string },
  chatId: string
) => {
  const message: DemoMessage = {
    id: nextId("demo-msg"),
    chatId,
    ...payload,
  };
  messages.push(message);
  return message;
};

export const createDemoChat = (
  offerId: string,
  executorId: string,
  businessId: string
) => {
  const chat: DemoChat = {
    id: nextId("demo-chat"),
    offerId,
    mystery_shopper: executorId,
    business: businessId,
  };
  chats.push(chat);
  return chat;
};

export const createDemoOffer = (
  name: string,
  userId: string,
  details: Record<string, { title: string; value: string }>
): DemoOffer => {
  const offer: DemoOffer = {
    id: nextId("demo-offer"),
    name,
    userId,
    user: TEST_BUSINESS_USER,
    details,
  };
  offers.push(offer);
  return offer;
};
