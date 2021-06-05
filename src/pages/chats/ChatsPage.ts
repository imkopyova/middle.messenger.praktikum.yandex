import { Block, TChildren, TProps } from "../../components/block/Block";
import { AuthController } from "../../controllers/AuthController";
import { ButtonCreateChat } from "../../components/button-create-chat/ButtonCreateChat";
import { ChatController } from "../../controllers/ChatController";
import { TChat } from "../../domain/entities/TChat";
import { TUser } from "../../domain/entities/TUser";
import { ROUTES } from "../../router";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";

interface IChatPageProps extends TProps {
    chats?: TChat[],
    user?: TUser,
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
        authController.auth((user: TUser) => this.setProps({...this.props, user: user}));
        chatController.subscribeChatsUpdate((chats: TChat[]) => this.setProps({...this.props, chats: chats}));
        chatController.getChats();
    }

    render(): string {
        return template({
            routes: ROUTES,
            chats: this.props.chats,
            buttonCreateChat: this.children.buttonCreateChat.getElement(),
        });
    }
}