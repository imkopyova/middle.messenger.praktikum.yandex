import { API_URL, BaseAPI } from "./base-api";
import { HTTPTransport } from "../helpers/HTTPTransport";
import { TAddUserToChatParams } from "../domain/value-objects/TAddUserToChatParams";

const chatAPIInstance = new HTTPTransport();
const CHAT_URL = `${API_URL}/chats`;

export class ChatAPI extends BaseAPI {
    getChats() {
        return chatAPIInstance.get(`${CHAT_URL}`);
    }

    createChat(title: string) {
        return chatAPIInstance.post(`${CHAT_URL}`, {data : { title }});
    }

    deleteChat(chatId: string) {
        return chatAPIInstance.delete(`${CHAT_URL}`, {data : { chatId }});
    }

    addUsersToChat(data: TAddUserToChatParams) {
        return chatAPIInstance.put(`${CHAT_URL}/users`, { data });
    }

    deleteUserFromChat(data: TAddUserToChatParams) {
        return chatAPIInstance.delete(`${CHAT_URL}/users`, { data });
    }

    getToken(chatId: number) {
        return chatAPIInstance.post(`${CHAT_URL}/token/${chatId}`);
    }
}