import { template } from "./template.js";
import { Block, TProps, TChildren } from "../../components/block/Block.js";

interface IChatPageProps extends TProps {
    imgSrc: string,
}

export class ChatPage extends Block<IChatPageProps, TChildren> {
    constructor(props: IChatPageProps) {
        super("div", {...props}, {});
    }

    render () {
        return template({});
    }
}