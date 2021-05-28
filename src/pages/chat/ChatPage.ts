import { Block, TChildren, TProps } from "../../components/block/Block";
import { MenuButton, MenuButtonTypes } from "../../components/menu-button/MenuButton";
import { AuthController } from "../../controllers/AuthController";
import { ButtonCreateChat } from "../../components/button-create-chat/ButtonCreateChat";
import { ChatController } from "../../controllers/ChatController";
import { Message } from "../../components/message/Message";
import { TChat } from "../../domain/entities/TChat";
import { template } from "./template";

interface IChatPageProps extends TProps {
    chat?: TChat,
    chats?: TChat[],
    messages?: any[],
}

const chatController = new ChatController();
const authController = new AuthController();

export class ChatPage extends Block<IChatPageProps, TChildren> {
    constructor() {
        super({}, {
            buttonCreateChat: 
                new ButtonCreateChat({
                    onClick: () => {
                        chatController.createChat();
                    }
                }),
            menuButtonAddUser:
                new MenuButton({
                    iconClassName: MenuButtonTypes.Plus,
                    text: "Добавить пользователя",
                    onClick: () => {
                        chatController.addUsersToChat();
                    }
                }),
            menuButtonDeleteUser:
                new MenuButton({
                    iconClassName: MenuButtonTypes.Minus,
                    text: "Удалить пользователя",
                    onClick: () => {
                        chatController.deleteUsersFromChat();
                    }
                }),
            menuButtonDeleteChat:
                new MenuButton({
                    iconClassName: MenuButtonTypes.Del,
                    text: "Удалить чат",
                    isWarning: true,
                    onClick: () => {
                        chatController.deleteChat();
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
        chatController.openWS(
            (userId: string) => {
                this.setProps({userId});
            },
            (messages: any) => {
                this.setProps({messages});
            }
        );
    }

    render(): string {
        return template({
            chats: this.props.chats,
            chatTitle: this.props.chat?.title,
            chatAvatar: this.props.chat?.avatar,
            messages: this.props.messages ? this.props.messages.map(message => new Message({
                text: message.content,
                time: message.time,
                isAuthorMe: message.user_id === this.props.userId
            }).getElement()) : [],
            buttonCreateChat: this.children.buttonCreateChat.getElement(),
            menuButtonAddUser: this.children.menuButtonAddUser.getElement(),
            menuButtonDeleteUser: this.children.menuButtonDeleteUser.getElement(),
            menuButtonDeleteChat: this.children.menuButtonDeleteChat.getElement(),
        });
    }
}