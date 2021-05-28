import { Block, TChildren, TProps } from "../../components/block/Block";
import { template } from "./template";
import { TChat } from "../../domain/entities/TChat";
import { ChatController } from "../../controllers/ChatController";
import { AuthController } from "../../controllers/AuthController";
import { ButtonCreateChat } from "../../components/button-create-chat/ButtonCreateChat";
import { MenuButton, MenuButtonTypes } from "../../components/menu-button/MenuButton";
import { Message } from "../../components/message/Message";

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
                    onClick: (e) => {
                        chatController.deleteUsersFromChat();
                    }
                }),
            menuButtonDeleteChat:
                new MenuButton({
                    iconClassName: MenuButtonTypes.Del,
                    text: "Удалить чат",
                    isWarning: true,
                    onClick: (e) => {
                        chatController.deleteChat();
                    }
                }),
            message:
                new Message({
                    text: "",
                    time: "",
                    isAuthorMe: false
                })
        });
    }

    componentDidMount() {
        authController.auth()
        chatController.subscribeChatsUpdate((chats: TChat[]) => this.setProps({...this.props, chats: chats}));
        chatController.subscribeChatUpdate((chat: TChat) => this.setProps({...this.props, chat: chat}));
        chatController.getChats();
        chatController.getChatData();
        chatController.openWS(
            (userId: string) => {
                this.setProps({userId})
            },
            (messages: any) => {
                this.setProps({messages})
            }
        );
    }

    render(): string {
        return template({
            chats: this.props.chats,
            chatTitle: this.props.chat?.title,
            chatAvatar: this.props.chat?.avatar,
            // TO DO refactor: не отображается правильно
            messages: this.props.messages ? this.props.messages.map(message => new Message({
                text: message.content,
                time: message.time,
                isAuthorMe: message.user_id === this.props.userId
            }).getElement()) : [],
            buttonCreateChat: this.children.buttonCreateChat.getElement(),
            menuButtonAddUser: this.children.menuButtonAddUser.getElement(),
            menuButtonDeleteUser: this.children.menuButtonDeleteUser.getElement(),
            menuButtonDeleteChat: this.children.menuButtonDeleteChat.getElement(),
            message: this.children.message.getElement(),
        });
    }
}