import { Block, TChildren } from "../../components/block/Block";
import { template } from "./template";

type IProfileEditPageProps = {
    imgSrc: string,
}

export class ProfileEditPage extends Block<IProfileEditPageProps, TChildren> {
    constructor(props: IProfileEditPageProps) {
        super({...props}, {});
    }

    render (): string {
        return template({
            imgSrc: this.props.imgSrc,
        });
    }
}