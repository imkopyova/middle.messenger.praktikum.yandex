import { Block, TChildren } from "../../components/block/Block";
import { template } from "./template";
import { AuthController } from "../../controllers/AuthController";

type IError404PageProps = {
    errorCode: string,
    errorText: string,
}

const authController = new AuthController();

export class Error404Page extends Block<IError404PageProps, TChildren> {
    constructor(props: IError404PageProps) {
        super({...props}, {});
    }

    componentDidMount() {
        authController.auth();
    }

    render (): string {
        return template({
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}