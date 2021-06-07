import { Block, TChildren, TProps} from "../../components/block/Block";
import { AuthController } from "../../controllers/AuthController";
import { Button } from "../../components/button/Button";
import { SigninController } from "../../controllers/SigninController";
import { onSubmit } from "../../helpers/submitForm";
import { ROUTES } from "../../router";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";
import { addFormValidateListeners } from "../../helpers/submitForm";
import "../../styles/base-button/styles.css";

const authController = new AuthController();
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

    componentDidMount() {
        addFormValidateListeners();
        authController.redirectToChat(); 
    }

    render (): string {
        return template({
            routes: ROUTES,
            button: this.children.button.getElement(),
        });
    }
}