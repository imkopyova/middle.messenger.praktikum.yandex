import { ChatAPI } from "../api/chat-api";
import { STORE_EVENTS } from "../helpers/Store";
import { chatsStore } from "../stores/chatsStore";
import { chatDataStore } from "../stores/chatDataStore";
import { router } from "../router";
import { TChat } from "../domain/entities/TChat";

const chatAPI = new ChatAPI();

export class ChatController {
    public subscribeChatsUpdate(callback: (storeData: unknown) => void) {
        chatsStore.on(STORE_EVENTS.UPDATE, callback);
    }

    public subscribeChatUpdate(callback: (storeData: unknown) => void) {
        chatDataStore.on(STORE_EVENTS.UPDATE, callback);
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

    public async getChatData() {
        try {
            const chatID = router.getCurrentRoute()?.split("/").reverse()[0];
            const { response } = await chatAPI.getChats();
            const chatsList = JSON.parse(response as string);
            const chat = chatsList.find((chat: TChat) => chat.id.toString() === chatID);
            chatDataStore.update(chat);
        } catch (error) {
            console.log(error)
        }
    }

    public async addUsersToChat() {
        try {
            chatAPI.addUsersToChat({
                users: [1],
                chatId : 676
            });
        } catch (error) {
            console.log(error)
        }
    }

    public async deleteUsersFromChat() {
        try {
            chatAPI.deleteUserFromChat({
                users: [1],
                chatId : 676
            });
        } catch (error) {
            console.log(error)
        }
    }
}