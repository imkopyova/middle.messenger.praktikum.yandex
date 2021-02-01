import { template } from "./template.js";
import { Block, TChildren } from "../../components/block/Block.js";

type IChatPageProps = {
    imgSrc: string,
}

export class ChatPage extends Block<IChatPageProps, TChildren> {
    constructor(props: IChatPageProps) {
        super({...props}, {});
    }

    render () {
        return template({});
    }
}