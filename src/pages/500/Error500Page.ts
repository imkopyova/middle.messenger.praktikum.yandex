import { template } from "./template.js";
import { Block, TProps } from "../../components/block/Block.js";

interface IError500PageProps extends TProps {
    errorCode: string,
    errorText: string,
}

export class Error500Page extends Block<IError500PageProps> {
    constructor(props: IError500PageProps) {
        super("div", {...props});
    }

    render () {
        return template({
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}