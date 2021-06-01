import { Block, TChildren } from "../block/Block";
import { template } from "./template";

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