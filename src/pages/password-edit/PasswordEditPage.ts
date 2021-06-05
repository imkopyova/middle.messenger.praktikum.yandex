import { AuthController } from "../../controllers/AuthController";
import { Block } from "../../components/block/Block";
import { Button } from "../../components/button/Button";
import { EditProfileController } from "../../controllers/EditProfileController";
import { onSubmit } from "../../helpers/submitForm";
import { ROUTES } from "../../router";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";
import { TUser } from "../../domain/entities/TUser";

type IPasswordEditPageProps = {
    imgSrc: string,
    user?: TUser,
}

type IPasswordEditPageChildren = {
    button: any, // eslint-disable-line @typescript-eslint/no-explicit-any
}

const authController = new AuthController();
const editProfileController = new EditProfileController();

export class PasswordEditPage extends Block<IPasswordEditPageProps, IPasswordEditPageChildren> {
    constructor(props: IPasswordEditPageProps) {
        super(
            {...props}, 
            {
                button: 
                    new Button({
                        text: "Сохранить",
                        onClick: (e) => {
                            const data = onSubmit(e);
                            editProfileController.editPassword(data as any);
                        }
                    })
            }
        );
    }

    componentDidMount() {
        authController.auth((user: TUser) => this.setProps({...this.props, user: user}));
    }

    render (): string {
        return template({
            routes: ROUTES,
            imgSrc: this.props.imgSrc,
            button: this.children.button.getElement(),
           
        });
    }
}