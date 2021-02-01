import { template } from "./template.js";
import { Block, TChildren } from "../../components/block/Block.js";

type IError500PageProps = {
    errorCode: string,
    errorText: string,
}

export class Error500Page extends Block<IError500PageProps, TChildren> {
    constructor(props: IError500PageProps) {
        super({...props}, {});
    }

    render () {
        return template({
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}