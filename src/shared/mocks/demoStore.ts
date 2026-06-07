import type { User } from "../types/user";
import { UserType } from "../types/user";
import { TEST_BUSINESS_USER } from "./demoUsers";
import {
  getDemoShopperById,
  getDemoUserStatus,
  INITIAL_DEMO_CHATS,
  INITIAL_DEMO_MESSAGES,
  INITIAL_DEMO_OFFERS,
  type DemoChat,
  type DemoMessage,
  type DemoOffer,
} from "./demoData";
import type { IReport } from "../types/report";
import { REPORT_STEPS } from "../types/enums";

let offers: DemoOffer[] = [...INITIAL_DEMO_OFFERS];
let chats: DemoChat[] = [...INITIAL_DEMO_CHATS];
let messages: DemoMessage[] = [...INITIAL_DEMO_MESSAGES];
let reports: IReport[] = [];

const nextId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

// export const resetDemoStore = () => {
//   offers = [...INITIAL_DEMO_OFFERS];
// };

export const getDemoOffers = (userType: string): DemoOffer[] => {
  if (userType === UserType.BUSINESS) {
    return offers.filter((offer) => offer.userId === TEST_BUSINESS_USER.id);
  }

  return offers.filter((offer) => offer.user.type === UserType.BUSINESS);
};

export const getDemoOfferById = (offerId: string): DemoOffer | undefined =>
  offers.find((offer) => offer.id === offerId);

const getCounterpartUser = (chat: DemoChat, user: User): User => {
  const counterpartId =
    user.type === UserType.BUSINESS ? chat.mystery_shopper : chat.business;

  if (counterpartId === TEST_BUSINESS_USER.id) {
    return TEST_BUSINESS_USER;
  }

  return (
    getDemoShopperById(counterpartId) ?? {
      id: counterpartId,
      name: "Участник",
      type:
        user.type === UserType.BUSINESS
          ? UserType.MYSTERY_SHOPPER
          : UserType.BUSINESS,
      email: "",
      password: "",
      token: "",
      details: {},
    }
  );
};

export const getDemoChats = (user: User) => {
  const userChats = chats.filter((chat) => chat[user.type] === user.id);

  return userChats.map((chat) => {
    const counterpart = getCounterpartUser(chat, user);

    return {
      ...chat,
      user: {
        ...counterpart,
        status: getDemoUserStatus(counterpart.id),
      },
    };
  });
};

export const getDemoChatById = (chatId: string, user?: User) => {
  const chat = chats.find((item) => item.id === chatId);
  if (!chat) return null;

  const counterpart = user
    ? getCounterpartUser(chat, user)
    : getDemoShopperById(chat.mystery_shopper);

  const chatMessages = messages
    .filter((message) => message.chatId === chatId)
    .map(({ chatId: _, ...message }) => message);

  return {
    ...chat,
    messages: chatMessages,
    user: {
      name: counterpart?.name ?? "Участник",
      status: getDemoUserStatus(counterpart?.id ?? ""),
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

export const createDemoReport = (
  props: any
) => {
  console.log(props);
  reports.push(props);
  return props;
};

export const getDemoReportByChatId = (chatId: string) => {
  console.log(reports);
  return reports.find((report) => report.chatId === chatId);
};