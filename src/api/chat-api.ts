import { API_URL } from "./base-api";
import { HTTPTransport } from "../helpers/HTTPTransport";
import { TAddUserToChatParams } from "../domain/value-objects/TAddUserToChatParams";
import { TChat } from "../domain/entities/TChat";
import { TChatDeleted } from "../domain/entities/TChatDeleted";
import { TToken } from "../domain/entities/TToken";
import { parseJSON } from "../helpers/parseJSON";

const chatAPIInstance = new HTTPTransport();
const CHAT_URL = `${API_URL}/chats`;

export class ChatAPI {
    async getChats(): Promise<TChat[]> {
        return parseJSON(await chatAPIInstance.get(`${CHAT_URL}`));
    }

    createChat(title: string): Promise<unknown> {
        return chatAPIInstance.post(`${CHAT_URL}`, {data : { title }});
    }

    async deleteChat(chatId: string): Promise<TChatDeleted> {
        return parseJSON(await chatAPIInstance.delete(`${CHAT_URL}`, {data : { chatId }}));
    }

    addUsersToChat(data: TAddUserToChatParams): Promise<unknown> {
        return chatAPIInstance.put(`${CHAT_URL}/users`, { data });
    }

    deleteUserFromChat(data: TAddUserToChatParams): Promise<unknown> {
        return chatAPIInstance.delete(`${CHAT_URL}/users`, { data });
    }

    async getToken(chatId: number): Promise<TToken> {
        return parseJSON(await chatAPIInstance.post(`${CHAT_URL}/token/${chatId}`));
    }
}