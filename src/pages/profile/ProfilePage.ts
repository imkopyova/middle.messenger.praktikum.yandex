import { Block, TChildren, TProps } from "../../components/block/Block";
import { template } from "./template";
import { UserController } from "../../controllers/UserController";
import { LogoutController } from "../../controllers/LogoutController";
import { TUser } from "../../domain/entities/TUser";
import { ButtonLogout } from "../../components/button-logout/ButtonLogout";

type IProfilePageProps = TProps & Partial<Pick<TUser, "first_name" | "second_name" | "display_name" | "login" | "email" | "phone" | "avatar">>;

const userController = new UserController();
const logoutController = new LogoutController();

export class ProfilePage extends Block<IProfilePageProps, TChildren> {
    constructor() {
        super({}, {
            buttonLogout: 
                new ButtonLogout({
                    className: "profile__button",
                    onClick: () => {
                        logoutController.logout();
                    }
                })
        });
    }

    componentDidMount() {
        userController.getUserData((user: TUser) => this.setProps(user));
    }

    render(): string {
        return template({
            imgSrc: this.props.avatar,
            mail: this.props.email,
            login: this.props.login,
            first_name: this.props.first_name,
            last_name: this.props.second_name,
            nickname: this.props.display_name,
            phone: this.props.phone,
            buttonLogout: this.children.buttonLogout.getElement(),
        });
    }
}