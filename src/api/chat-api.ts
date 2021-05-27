import { HTTPTransport } from "../helpers/HTTPTransport";
import { BaseAPI, API_URL } from "./base-api";

const chatAPIInstance = new HTTPTransport();
const CHAT_URL = `${API_URL}/chats`;

export class ChatAPI extends BaseAPI {
    getChats() {
        return chatAPIInstance.get(`${CHAT_URL}`);
    }

    createChat(title: string) {
        return chatAPIInstance.post(`${CHAT_URL}`, {data : { title: title }});
    }
}