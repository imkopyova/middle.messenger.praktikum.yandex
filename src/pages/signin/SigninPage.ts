import { Block, TChildren, TProps } from "../../components/block/Block";
import { template } from "./template";

export class SigninPage extends Block<TProps, TChildren> {
    constructor() {
        super({}, {});
    }

    render (): string {
        return template({});
    }
}