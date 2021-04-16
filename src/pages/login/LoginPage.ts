import { template } from "./template";
import { Block, TProps, TChildren} from "../../components/block/Block";

export class LoginPage extends Block<TProps, TChildren> {
    constructor() {
        super({}, {});
    }

    render () {
        return template({});
    }
}