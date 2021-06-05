import { Block, TChildren } from "../block/Block";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";

export type IButtonLogoutProps = {
    className?: string,
    onClick: (e: Event) => void,
}

export class ButtonLogout extends Block<IButtonLogoutProps, TChildren> {
    constructor(props: IButtonLogoutProps) {
        super({...props}, {});
    }

    render (): string {
        return template({
            className: this.props.className,
            onClick: this.props.onClick
        });
    }
}