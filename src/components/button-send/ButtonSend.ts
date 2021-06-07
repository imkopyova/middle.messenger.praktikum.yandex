import { Block, TChildren } from "../block/Block";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";

export type IButtonSendProps = {
    className?: string,
    onClick: (e: Event) => void,
}

export class ButtonSend extends Block<IButtonSendProps, TChildren> {
    constructor(props: IButtonSendProps) {
        super({...props}, {});
    }

    render (): string {
        return template({
            className: this.props.className,
            onClick: this.props.onClick
        });
    }
}