import { Block, TChildren } from "../../components/block/Block";
import { AuthController } from "../../controllers/AuthController";
import { template } from "./template";

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
        authController.auth(() => {});
    }

    render (): string {
        return template({
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}