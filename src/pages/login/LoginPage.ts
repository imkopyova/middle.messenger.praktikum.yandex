import { Block, TChildren, TProps} from "../../components/block/Block";
import { Button } from "../../components/button/Button";
import { template } from "./template";
import { SigninController } from "../../controllers/SigninController";

const signinController = new SigninController();
export class LoginPage extends Block<TProps, TChildren> {
    constructor() {
        super(
            {}, 
            {
                button: 
                    new Button({
                        text: "Авторизоваться",
                        onClick: () => {
                            signinController.signin({
                                login: "ok",
                                password: "password"
                            })
                        }
                    })
            }
        );
        
    }

    render (): string {
        return template({
            button: this.children.button.getElement(),
        });
    }
}