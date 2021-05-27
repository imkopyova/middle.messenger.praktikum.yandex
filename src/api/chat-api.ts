import { HTTPTransport } from "../helpers/HTTPTransport";
import { BaseAPI, API_URL } from "./base-api";
import { TAddUserToChatParams } from "../domain/value-objects/TAddUserToChatParams";

const chatAPIInstance = new HTTPTransport();
const CHAT_URL = `${API_URL}/chats`;

export class ChatAPI extends BaseAPI {
    getChats() {
        return chatAPIInstance.get(`${CHAT_URL}`);
    }

    createChat(title: string) {
        return chatAPIInstance.post(`${CHAT_URL}`, {data : { title: title }});
    }

    addUsersToChat(data: TAddUserToChatParams) {
        return chatAPIInstance.put(`${CHAT_URL}/users`, { data });
    }

    deleteUserFromChat(data: TAddUserToChatParams) {
        return chatAPIInstance.delete(`${CHAT_URL}/users`, { data });
    }
}