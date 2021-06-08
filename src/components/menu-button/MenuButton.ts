import { Block, TChildren } from "../block/Block";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";
import "../../styles/circle-button/styles.css";

export enum MenuButtonTypes {
    Plus = "plus",
    Minus = "minus",
    Sticker = "sticker",
    Del = "del"
}

export type IMenuButtonProps = {
    iconClassName: MenuButtonTypes,
    text: string,
    onClick: (e: Event) => void,
    isWarning?: boolean,
}

export class MenuButton extends Block<IMenuButtonProps, TChildren> {
    constructor(props: IMenuButtonProps) {
        super({...props}, {});
    }

    render (): string {
        return template({
            text: this.props.text,
            onClick: this.props.onClick,
            iconClassName: this.props.iconClassName,
            isWarning: this.props.isWarning,
        });
    }
}