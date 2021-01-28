import { template } from "./template.js";
import { Block, TProps } from "../../components/block/Block.js";

interface IProfileEditPageProps extends TProps {
    imgSrc: string,
}

export class ProfileEditPage extends Block<IProfileEditPageProps> {
    constructor(props: IProfileEditPageProps) {
        super("div", {...props});
    }

    render () {
        return template({
            imgSrc: this.props.imgSrc,
        });
    }
}