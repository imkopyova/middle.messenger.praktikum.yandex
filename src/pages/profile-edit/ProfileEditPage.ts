import { Block, TChildren, TProps } from "../../components/block/Block";
import { AuthController } from "../../controllers/AuthController";
import { Button } from "../../components/button/Button";
import { EditProfileController } from "../../controllers/EditProfileController";
import { TUser } from "../../domain/entities/TUser";
import { onSubmit } from "../../helpers/submitForm";
import { ROUTES } from "../../router";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";

const authController = new AuthController();
const editProfileController = new EditProfileController();

export class ProfileEditPage extends Block<TProps, TChildren> {
    constructor() {
        super(
            {}, 
            {
                button: 
                    new Button({
                        text: "Сохранить",
                        className: "profile__base-button",
                        onClick: (e) => {
                            const data = onSubmit(e);
                            console.log(data);
                            editProfileController.edit(data as any);
                        }
                    }),
                
            }
        );
    }

    componentDidMount() {
        authController.auth((user: TUser) => this.setProps({...this.props, user: user}));
    }

    render (): string {
        return template({
            routes: ROUTES,
            avatar: this.props.avatar,
            email: this.props.email,
            login: this.props.login,
            first_name: this.props.first_name,
            second_name: this.props.second_name,
            display_name: this.props.display_name,
            phone: this.props.phone,
            button: this.children.button.getElement(),
        });
    }
}