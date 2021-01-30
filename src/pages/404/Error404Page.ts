import { template } from "./template.js";
import { Block, TProps, TChildren } from "../../components/block/Block.js";

interface IError404PageProps extends TProps {
    errorCode: string,
    errorText: string,
}

export class Error404Page extends Block<IError404PageProps, TChildren> {
    constructor(props: IError404PageProps) {
        super("div", {...props}, {});
    }

    render () {
        return template({
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}