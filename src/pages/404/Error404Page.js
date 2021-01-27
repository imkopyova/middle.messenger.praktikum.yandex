import { template } from "./template.js";
import { Block } from "../../components/block/Block.js";

export class Error404Page extends Block {
    constructor() {
        super("div", {
            errorCode: "404",
            errorText: "Не туда попали",
        });
    }

    render () {
        return template({
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        });
    }
}