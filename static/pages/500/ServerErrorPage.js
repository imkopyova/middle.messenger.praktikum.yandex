import { template } from "./template.js";
import { Block } from "../../components/block/Block.js";

export class ErrorPage extends Block {
    constructor() {
        super("div", {
            errorCode: "500",
            errorText: "Мы уже фиксим",
        });
    }

    render () {
        return template({
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}