import { Block, TChildren } from "../block/Block";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";

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