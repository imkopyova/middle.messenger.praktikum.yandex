import { ChatAPI } from "../api/chat-api";
import { AuthAPI } from "../api/auth-api";
import { WSAPI } from "../api/ws-api";
import { STORE_EVENTS } from "../helpers/Store";
import { chatsStore } from "../stores/chatsStore";
import { chatDataStore } from "../stores/chatDataStore";
import { userStore } from "../stores/userStore";
import { router, ROUTES } from "../router";
import { TChat } from "../domain/entities/TChat";
import { UserController } from "./UserController";

const chatAPI = new ChatAPI();
const authAPI = new AuthAPI();
const wsAPI = new WSAPI();

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
            const { status } = await chatAPI.createChat("Test Chat");
            if (status === 200) {
                this.getChats();
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async deleteChat() {
        try {
            const chatID = router.getUrlParam();
            const { status } = await chatAPI.deleteChat(chatID);
            if (status === 200) {
                router.go(ROUTES.HOME);
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async getChatData() {
        try {
            const chatID = router.getUrlParam();
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
            const chatId = router.getUrlParam();
            chatAPI.addUsersToChat({
                users: [1],
                chatId : parseInt(chatId)
            });
        } catch (error) {
            console.log(error)
        }
    }

    public async deleteUsersFromChat() {
        try {
            const chatId = router.getUrlParam();
            chatAPI.deleteUserFromChat({
                users: [1],
                chatId : parseInt(chatId)
            });
        } catch (error) {
            console.log(error)
        }
    }

    public async openWS(
        onGetUser: (userId: string) => void,
        onGetMessage: (data: any) => void,
        onPostMessage?: (data: any) => void
    ) {
        try {
            const chatId = parseInt(router.getUrlParam());
            const { response: userIdResponse } = await authAPI.getUser();
            const { response: tokenResponse } = await chatAPI.getToken(chatId);

            if (tokenResponse && userIdResponse && chatId) {
                const token = JSON.parse(tokenResponse as string).token;
                const userId = JSON.parse(userIdResponse as string).id;
                onGetUser(userId);
                const socket = wsAPI.connect({userId, chatId, token});
                
                socket.addEventListener("open", () => {
                    socket.send(JSON.stringify({
                        content: "0",
                        type: "get old",
                    }));
                });

                socket.addEventListener("message", event => {
                    console.log(event)
                    onGetMessage(JSON.parse(event.data));
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
}