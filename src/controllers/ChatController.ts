import { router, ROUTES } from "../router";
import { AuthAPI } from "../api/auth-api";
import { ChatAPI } from "../api/chat-api";
import { STORE_EVENTS } from "../helpers/Store";
import { TChat } from "../domain/entities/TChat";
import { WSAPI } from "../api/ws-api";
import { chatDataStore } from "../stores/chatDataStore";
import { chatsStore } from "../stores/chatsStore";
import { socketStore } from "../stores/socketStore";

const chatAPI = new ChatAPI();
const authAPI = new AuthAPI();
const wsAPI = new WSAPI();

export class ChatController {
    public subscribeChatsUpdate(callback: (storeData: any) => void) {
        chatsStore.on(STORE_EVENTS.UPDATE, callback);
    }

    public subscribeChatUpdate(callback: (storeData: any) => void) {
        chatDataStore.on(STORE_EVENTS.UPDATE, callback);
    }

    public subscribeSocketUpdate(callback: (storeData: any) => void) {
        socketStore.on(STORE_EVENTS.UPDATE, callback);
    }

    public async getChats() {
        try {
            const chatsList = await chatAPI.getChats();
            chatsStore.update(chatsList);
        } catch (error) {
            console.log(error);
        }
    }

    public async createChat() {
        try {
            await chatAPI.createChat("Test Chat");
            this.getChats();
        } catch (error) {
            console.log(error);
        }
    }

    public async deleteChat() {
        try {
            const chatID = router.getUrlParam();
            await chatAPI.deleteChat(chatID);
            router.go(ROUTES.HOME);
        } catch (error) {
            console.log(error);
        }
    }

    public async getChatData() {
        try {
            const chatID = router.getUrlParam();
            const chatsList = await chatAPI.getChats();
            const chat = chatsList.find((chat: TChat) => chat.id.toString() === chatID);
            chatDataStore.update(chat);
        } catch (error) {
            console.log(error);
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
            console.log(error);
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
            console.log(error);
        }
    }

    public async sendMessage(data: {file: File, message: string}) {
        // eslint-disable-next-line
        // @ts-ignore
        const socket: any = socketStore.get().socket;
        socket.send(JSON.stringify({
            content: data.message,
            type: "message",
        }));
    }

    public async openWS(
        onGetUser: (userId: number) => void,
        onGetMessage: (data: any) => void,
    ) {
        try {
            const chatId = parseInt(router.getUrlParam());
            const userIdResponse = await authAPI.getUser();
            const tokenResponse = await chatAPI.getToken(chatId);

            if (tokenResponse && userIdResponse && chatId) {
                const token = tokenResponse.token;
                const userId = userIdResponse.id;
                onGetUser(userId);
                const socketInstance = wsAPI.connect({userId, chatId, token});

                this.subscribeSocketUpdate((socket: WebSocket) => socket);
                socketStore.update({socket: socketInstance});

                // eslint-disable-next-line
                // @ts-ignore
                const socket = socketStore.get().socket;
                
                socket.addEventListener("open", () => {
                    socket.send(JSON.stringify({
                        content: "0",
                        type: "get old",
                    }));
                });

                socket.addEventListener("message", (event: any) => {
                    onGetMessage(JSON.parse(event.data));
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}