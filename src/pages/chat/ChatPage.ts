import { Block, TChildren, TProps } from "../../components/block/Block";
import { template } from "./template";
import { TChat } from "../../domain/entities/TChat";
import { ChatController } from "../../controllers/ChatController";
import { AuthController } from "../../controllers/AuthController";
import { ButtonCreateChat } from "../../components/button-create-chat/ButtonCreateChat";
import { MenuButton, MenuButtonTypes } from "../../components/menu-button/MenuButton";

interface IChatPageProps extends TProps {
    chat?: TChat,
    chats?: TChat[],
}

const chatController = new ChatController();
const authController = new AuthController();

export class ChatPage extends Block<IChatPageProps, TChildren> {
    constructor() {
        super({}, {
            buttonCreateChat: 
                new ButtonCreateChat({
                    onClick: (e) => {
                        chatController.createChat();
                    }
                }),
            menuButtonAddUser:
                new MenuButton({
                    iconClassName: MenuButtonTypes.Plus,
                    text: "Добавить пользователя",
                    onClick: (e) => {
                        chatController.addUsersToChat();
                    }
                }),
            menuButtonDeleteUser:
                new MenuButton({
                    iconClassName: MenuButtonTypes.Minus,
                    text: "Удалить пользователя",
                    isWarning: true,
                    onClick: (e) => {
                        chatController.deleteUsersFromChat();
                    }
                })
        });
    }

    componentDidMount() {
        authController.auth();
        chatController.subscribeChatsUpdate((chats: TChat[]) => this.setProps({...this.props, chats: chats}));
        chatController.subscribeChatUpdate((chat: TChat) => this.setProps({...this.props, chat: chat}));
        chatController.getChats();
        chatController.getChatData();
    }

    render(): string {
        return template({
            chats: this.props.chats,
            chatTitle: this.props.chat?.title,
            chatAvatar: this.props.chat?.avatar,
            buttonCreateChat: this.children.buttonCreateChat.getElement(),
            menuButtonAddUser: this.children.menuButtonAddUser.getElement(),
            menuButtonDeleteUser: this.children.menuButtonDeleteUser.getElement(),
        });
    }
}