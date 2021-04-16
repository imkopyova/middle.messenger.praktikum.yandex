import { template } from "./template";
import { Block, TChildren } from "../../components/block/Block";

type IProfileEditPageProps = {
    imgSrc: string,
}

export class ProfileEditPage extends Block<IProfileEditPageProps, TChildren> {
    constructor(props: IProfileEditPageProps) {
        super({...props}, {});
    }

    render () {
        return template({
            imgSrc: this.props.imgSrc,
        });
    }
}