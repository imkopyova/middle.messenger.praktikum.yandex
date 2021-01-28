import { template } from "./template.js";
import { Block, TProps } from "../../components/block/Block.js";

interface IPasswordEditPageProps extends TProps {
    imgSrc: string,
}

export class PasswordEditPage extends Block<IPasswordEditPageProps> {
    constructor(props: IPasswordEditPageProps) {
        super("div", {...props});
    }

    render () {
        return template({
            imgSrc: this.props.imgSrc,
        });
    }
}