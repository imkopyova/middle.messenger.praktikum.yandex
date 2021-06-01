import { Block, TChildren } from "../block/Block";
import { template } from "./template";

export type IButtonCreateChatProps = {
    className?: string,
    onClick: (e: Event) => void,
}

export class ButtonCreateChat extends Block<IButtonCreateChatProps, TChildren> {
    constructor(props: IButtonCreateChatProps) {
        super({...props}, {});
    }

    render (): string {
        return template({
            className: this.props.className,
            onClick: this.props.onClick
        });
    }
}