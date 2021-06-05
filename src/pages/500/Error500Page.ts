import { Block, TChildren } from "../../components/block/Block";
import { AuthController } from "../../controllers/AuthController";
import { ROUTES } from "../../router";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";

type IError500PageProps = {
    errorCode: string,
    errorText: string,
}

const authController = new AuthController();

export class Error500Page extends Block<IError500PageProps, TChildren> {
    constructor(props: IError500PageProps) {
        super({...props}, {});
    }

    componentDidMount() {
        authController.auth(() => {console.log();});
    }

    render (): string {
        return template({
            routes: ROUTES,
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}