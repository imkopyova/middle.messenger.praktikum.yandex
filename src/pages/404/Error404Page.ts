import { Block, TChildren } from "../../components/block/Block";
import { template } from "./template";

type IError404PageProps = {
    errorCode: string,
    errorText: string,
}

export class Error404Page extends Block<IError404PageProps, TChildren> {
    constructor(props: IError404PageProps) {
        super({...props}, {});
    }

    render (): string {
        return template({
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}