import { Block, TChildren, TProps } from "../../components/block/Block";
import { template } from "./template";
import { TChat } from "../../domain/entities/TChat";
import { ChatController } from "../../controllers/ChatController";
import { ButtonCreateChat } from "../../components/button-create-chat/ButtonCreateChat";

interface IChatPageProps extends TProps {
    chats?: TChat[],
}

const chatController = new ChatController();

export class ChatPage extends Block<IChatPageProps, TChildren> {
    constructor() {
        super({}, {
            buttonCreateChat: 
                new ButtonCreateChat({
                    onClick: (e) => {
                        console.log("ButtonCreateChat", e);
                        chatController.createChat();
                    }
                })
        });
    }

    componentDidMount() {
        chatController.subscribeChatsUpdate((chats: TChat[]) => this.setProps({chats: chats}));
        chatController.getChats();
    }

    render(): string {
        return template({
            chats: this.props.chats,
            buttonCreateChat: this.children.buttonCreateChat.getElement(),
        });
    }
}