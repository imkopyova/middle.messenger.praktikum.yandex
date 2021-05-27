import { Block, TChildren, TProps } from "../../components/block/Block";
import { template } from "./template";
import { EditProfileController } from "../../controllers/EditProfileController";
import { UserController } from "../../controllers/UserController";
import { onSubmit } from "../../helpers/submitForm";
import { Button } from "../../components/button/Button";
import { TUser } from "../../domain/entities/TUser";

const editProfileController = new EditProfileController();
const userController = new UserController();

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
        userController.getUserData((user: TUser) => this.setProps(user));
    }

    render (): string {
        return template({
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