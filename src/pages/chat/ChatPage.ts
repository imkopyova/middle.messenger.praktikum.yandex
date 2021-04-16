import { template } from "./template";
import { Block, TChildren } from "../../components/block/Block";

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