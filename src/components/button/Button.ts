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
        console.log("componentDidMount Button")
        const button = this._element.querySelector("button");
        button?.addEventListener("click", () => this.props.onClick())
    }

    render () {
        console.log("render Button")
        return template({
            text: this.props.text,
        });
    }
}