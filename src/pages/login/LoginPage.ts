import { template } from "./template.js";
import { Block, TProps} from "../../components/block/Block.js";

export class LoginPage extends Block<TProps> {
    constructor() {
        super("div", {});
    }

    render () {
        return template({});
    }
}