import { template } from "./template.js";
import { Block, TProps, TChildren } from "../../components/block/Block.js";

export interface IButtonProps extends TProps {
    text: string,
    onClick: () => void,
}

export class Button extends Block<IButtonProps, TChildren> {
    constructor(props: IButtonProps) {
        super("div", {...props}, {});
    }

    componentDidMount() {
        if (!this.props.onClick) {
            return;
        }
        console.log(this._element)
        this._element.addEventListener("click", this.props.onClick)
    }

    render () {
        return template({
            text: this.props.text,
        });
    }
}