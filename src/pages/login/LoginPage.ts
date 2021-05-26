import { Block, TChildren, TProps} from "../../components/block/Block";
import { Button } from "../../components/button/Button";
import { template } from "./template";
import { SigninController } from "../../controllers/SigninController";
import { onSubmit } from "../../helpers/submitForm";

const signinController = new SigninController();
export class LoginPage extends Block<TProps, TChildren> {
    constructor() {
        super(
            {}, 
            {
                button: 
                    new Button({
                        text: "Авторизоваться",
                        onClick: (e) => {
                            const data = onSubmit(e);
                            signinController.signin(data as any);
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