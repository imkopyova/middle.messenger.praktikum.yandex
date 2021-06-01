import { Block, TChildren } from "../../components/block/Block";
import { template } from "./template";

export type IButtonProps = {
    text: string,
    className?: string,
    onClick: (e: Event) => void,
}

export class Button extends Block<IButtonProps, TChildren> {
    constructor(props: IButtonProps) {
        super({...props}, {});
    }

    render (): string {
        return template({
            text: this.props.text,
            className: this.props.className
        });
    }
}