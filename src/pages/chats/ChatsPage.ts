import { Block, TChildren, TProps } from "../../components/block/Block";
import { template } from "./template";
import { TChat } from "../../domain/entities/TChat";
import { ChatController } from "../../controllers/ChatController";
import { AuthController } from "../../controllers/AuthController";
import { ButtonCreateChat } from "../../components/button-create-chat/ButtonCreateChat";

interface IChatPageProps extends TProps {
    chats?: TChat[],
}

const chatController = new ChatController();
const authController = new AuthController();

export class ChatsPage extends Block<IChatPageProps, TChildren> {
    constructor() {
        super({}, {
            buttonCreateChat: 
                new ButtonCreateChat({
                    onClick: (e) => {
                        chatController.createChat();
                    }
                }),
        });
    }

    componentDidMount() {
        authController.auth();
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