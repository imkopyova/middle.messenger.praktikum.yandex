import { Block } from "../../components/block/Block";
import { Button } from "../../components/button/Button";
import { EditProfileController } from "../../controllers/EditProfileController";
import { onSubmit } from "../../helpers/submitForm";
import { template } from "./template";
import { AuthController } from "../../controllers/AuthController";

type IPasswordEditPageProps = {
    imgSrc: string,
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
        authController.auth();
    }

    render (): string {
        return template({
            imgSrc: this.props.imgSrc,
            button: this.children.button.getElement(),
           
        });
    }
}