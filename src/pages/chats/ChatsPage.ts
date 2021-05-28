import { Block, TChildren, TProps } from "../../components/block/Block";
import { AuthController } from "../../controllers/AuthController";
import { ButtonCreateChat } from "../../components/button-create-chat/ButtonCreateChat";
import { ChatController } from "../../controllers/ChatController";
import { TChat } from "../../domain/entities/TChat";
import { template } from "./template";

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
                    onClick: () => {
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