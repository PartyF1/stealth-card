import api from "../../../shared/lib/axios";
import { isDemoSession } from "../../../shared/mocks/isDemoSession";
import {
  addDemoMessage,
  getDemoChatById,
  getDemoChats,
} from "../../../shared/mocks/demoStore";
import { UserType, type User } from "../../../shared/types/user";

interface IMessage {
  text: string;
  time: string;
  userId: string;
}

export const getOrders = async (user: User) => {
  if (isDemoSession()) {
    return getDemoChats(user);
  }

  const response = await api.get(`/chats?${user.type}=${user.id}`);
  const result = response.data?.map(async (element) => {
    const chatUser = (
      await api.get(
        `/users/${
          element[
            user.type === UserType.BUSINESS
              ? UserType.MYSTERY_SHOPPER
              : UserType.BUSINESS
          ]
        }`
      )
    ).data;
    return {
      ...element,
      user: chatUser,
    };
  }, []);

  return Promise.all(result);
};

export const getMessages = async (chatId: string) => {
  if (isDemoSession()) {
    return { data: getDemoChatById(chatId) };
  }

  return await api.get(`/chats/${chatId}/?_embed=messages`);
};

export const newMessage = async (message: IMessage, chatId: string) => {
  if (isDemoSession()) {
    const created = addDemoMessage(message, chatId);
    return { data: created };
  }

  return await api.post(`/messages`, {
    ...message,
    chatId,
  });
};
