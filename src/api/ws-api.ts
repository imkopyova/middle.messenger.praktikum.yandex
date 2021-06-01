const WS_URL = "wss://ya-praktikum.tech/ws";
let socket;

export class WSAPI {
    public connect(params: {userId: number, chatId: number, token: string}) {
        socket = new WebSocket(`${WS_URL}/chats/${params.userId}/${params.chatId}/${params.token}/`);
        return socket;
    }
}