import { template } from "./template.js";
import { Block, TProps, TChildren} from "../../components/block/Block.js";

export class LoginPage extends Block<TProps, TChildren> {
    constructor() {
        super({}, {});
    }

    render () {
        return template({});
    }
}