import { template } from "./template.js";
import { Block, TProps, TChildren } from "../../components/block/Block.js";

export interface IButtonProps extends TProps {
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