import { UserType, type User } from "../types/user";
import { TEST_BUSINESS_USER, TEST_SHOPPER_USER } from "./demoUsers";

export const DEMO_SHOPPERS: User[] = [
  TEST_SHOPPER_USER,
  {
    id: "demo-shopper-2",
    email: "igor@demo.ru",
    password: "",
    type: UserType.MYSTERY_SHOPPER,
    token: "",
    name: "Игорь Синяков",
    details: { location: "Санкт-Петербург", birthDate: "1988-11-03" },
  },
  {
    id: "demo-shopper-3",
    email: "victoria@demo.ru",
    password: "",
    type: UserType.MYSTERY_SHOPPER,
    token: "",
    name: "Виктория Селезнёва",
    details: { location: "Казань", birthDate: "1995-02-20" },
  },
];

const offerDetails = (
  description: string,
  location: string,
  cost: string,
  conditions: string
) => ({
  description: { title: "Описание", value: description },
  location: { title: "Расположение", value: location },
  cost: { title: "Оплата", value: cost },
  conditions: { title: "Условия", value: conditions },
});

export interface DemoOffer {
  id: string;
  name: string;
  userId: string;
  user: User;
  details: Record<string, { title: string; value: string }>;
}

export interface DemoChat {
  id: string;
  offerId: string;
  mystery_shopper: string;
  business: string;
}

export interface DemoMessage {
  id: string;
  chatId: string;
  text: string;
  time: string;
  userId: string;
}

export const INITIAL_DEMO_OFFERS: DemoOffer[] = [
  {
    id: "demo-offer-1",
    name: "Проверка аптеки «Здоровье+»",
    userId: TEST_BUSINESS_USER.id,
    user: TEST_BUSINESS_USER,
    details: offerDetails(
      "Оценить качество консультации фармацевта и наличие рекламных материалов",
      "Москва, ул. Тверская, 12",
      "3 500 ₽",
      "Личный визит, фотоотчёт"
    ),
  },
  {
    id: "demo-offer-2",
    name: "Тайная проверка кофейни",
    userId: TEST_BUSINESS_USER.id,
    user: TEST_BUSINESS_USER,
    details: offerDetails(
      "Проверить скорость обслуживания, чистоту зала и знание меню бариста",
      "Москва, Патриаршие пруды",
      "2 800 ₽",
      "Личный визит"
    ),
  },
  {
    id: "demo-offer-3",
    name: "Аудит автосервиса",
    userId: TEST_BUSINESS_USER.id,
    user: TEST_BUSINESS_USER,
    details: offerDetails(
      "Оценить приём клиентов, время ожидания и качество консультации мастера",
      "Москва, Варшавское ш., 47",
      "5 000 ₽",
      "Личный визит, звонок в офис"
    ),
  },
];

export const INITIAL_DEMO_CHATS: DemoChat[] = [
  {
    id: "demo-chat-1",
    offerId: "demo-offer-1",
    mystery_shopper: TEST_SHOPPER_USER.id,
    business: TEST_BUSINESS_USER.id,
  },
  {
    id: "demo-chat-2",
    offerId: "demo-offer-2",
    mystery_shopper: "demo-shopper-2",
    business: TEST_BUSINESS_USER.id,
  },
  {
    id: "demo-chat-3",
    offerId: "demo-offer-3",
    mystery_shopper: "demo-shopper-3",
    business: TEST_BUSINESS_USER.id,
  },
];

export const INITIAL_DEMO_MESSAGES: DemoMessage[] = [
  {
    id: "demo-msg-1",
    chatId: "demo-chat-1",
    text: "Здравствуйте! Готов выполнить проверку аптеки на Тверской.",
    time: "10:12",
    userId: TEST_SHOPPER_USER.id,
  },
  {
    id: "demo-msg-2",
    chatId: "demo-chat-1",
    text: "Добрый день! Отлично, уточните, пожалуйста, удобное время визита.",
    time: "10:18",
    userId: TEST_BUSINESS_USER.id,
  },
  {
    id: "demo-msg-3",
    chatId: "demo-chat-1",
    text: "Могу приехать завтра после 14:00. Нужен ли чек на покупку?",
    time: "10:22",
    userId: TEST_SHOPPER_USER.id,
  },
  {
    id: "demo-msg-4",
    chatId: "demo-chat-2",
    text: "Хочу предложить заказ! Уже выполнял похожие проверки в HoReCa.",
    time: "09:05",
    userId: "demo-shopper-2",
  },
  {
    id: "demo-msg-5",
    chatId: "demo-chat-2",
    text: "Спасибо за отклик. Расскажите, сколько подобных заказов вы выполняли?",
    time: "09:41",
    userId: TEST_BUSINESS_USER.id,
  },
  {
    id: "demo-msg-6",
    chatId: "demo-chat-2",
    text: "За последний год — 17 проверок кафе и ресторанов, средняя оценка 4.8.",
    time: "09:48",
    userId: "demo-shopper-2",
  },
  {
    id: "demo-msg-7",
    chatId: "demo-chat-3",
    text: "Добрый день! Интересует задание по автосервису. Есть опыт в автосфере.",
    time: "16:30",
    userId: "demo-shopper-3",
  },
  {
    id: "demo-msg-8",
    chatId: "demo-chat-3",
    text: "Здравствуйте! Договорились, жду отчёт до конца недели.",
    time: "16:55",
    userId: TEST_BUSINESS_USER.id,
  },
];

export const getDemoShopperById = (id: string): User | undefined =>
  DEMO_SHOPPERS.find((shopper) => shopper.id === id);

export const getDemoUserStatus = (userId: string): string => {
  const statuses: Record<string, string> = {
    [TEST_SHOPPER_USER.id]: "online",
    "demo-shopper-2": "offline",
    "demo-shopper-3": "offline",
    [TEST_BUSINESS_USER.id]: "online",
  };
  return statuses[userId] ?? "offline";
};
