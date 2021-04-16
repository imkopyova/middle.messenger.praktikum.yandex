import { template } from "./template";
import { Block, TChildren } from "../../components/block/Block";

export type IButtonProps = {
    text: string,
    onClick: (e: Event) => void,
}

export class Button extends Block<IButtonProps, TChildren> {
    constructor(props: IButtonProps) {
        super({...props}, {});
    }

    render () {
        return template({
            text: this.props.text,
        });
    }
}