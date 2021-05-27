import { Block, TChildren, TProps } from "../../components/block/Block";
import { template } from "./template";
import { Button } from "../../components/button/Button";
import { onSubmit } from "../../helpers/submitForm";
import { SignupController } from "../../controllers/SignupController";
import { AuthController } from "../../controllers/AuthController";

const authController = new AuthController();
const signupController = new SignupController();
export class SigninPage extends Block<TProps, TChildren> {
    constructor() {
        super({}, {
            button: 
                new Button({
                    text: "Зарегестрироваться",
                    onClick: (e) => {
                        const data = onSubmit(e);
                        console.log(data)
                        data && signupController.signup(data as any);
                    }
                })
        });
    }

    componentDidMount() {
        authController.redirectToChat();
    }

    render (): string {
        return template({
            button: this.children.button.getElement(),
        });
    }
}