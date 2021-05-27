import { ChatAPI } from "../api/chat-api";
import { STORE_EVENTS } from "../helpers/Store";
import { chatsStore } from "../stores/chatsStore";

const chatAPI = new ChatAPI();

export class ChatController {
    public subscribeChatsUpdate(callback: (storeData: unknown) => void) {
        chatsStore.on(STORE_EVENTS.UPDATE, callback);
    }

    public async getChats() {
        try {
            const { response } = await chatAPI.getChats();
            const chatsList = JSON.parse(response as string);
            chatsStore.update(chatsList);
        } catch (error) {
            console.log(error)
        }
    }

    public async createChat() {
        try {
            const { status } = await chatAPI.createChat("First Chat");
            if (status === 200) {
                this.getChats();
            }
        } catch (error) {
            console.log(error)
        }
    }
}