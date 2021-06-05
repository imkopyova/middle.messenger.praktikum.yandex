import { Block, TChildren, TProps } from "../../components/block/Block";
import { MenuButton, MenuButtonTypes } from "../../components/menu-button/MenuButton";
import { AuthController } from "../../controllers/AuthController";
import { ButtonCreateChat } from "../../components/button-create-chat/ButtonCreateChat";
import { ChatController } from "../../controllers/ChatController";
import { Message } from "../../components/message/Message";
import { TChat } from "../../domain/entities/TChat";
import { TUser } from "../../domain/entities/TUser";
import { ROUTES } from "../../router";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";

interface IChatPageProps extends TProps {
    chat?: TChat,
    chats?: TChat[],
    messages?: any[],
    user?: TUser,
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
        authController.auth((user: TUser) => this.setProps({...this.props, user: user}));
        chatController.subscribeChatsUpdate((chats: TChat[]) => this.setProps({...this.props, chats: chats}));
        chatController.subscribeChatUpdate((chat: TChat) => this.setProps({...this.props, chat: chat}));
        chatController.getChats();
        chatController.getChatData();
        chatController.openWS(
            (userId: any) => {
                this.setProps({userId});
            },
            (messages: any) => {
                this.setProps({messages});
            }
        );
    }

    render(): string {
        return template({
            routes: ROUTES,
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