import { Block, TChildren } from "../../components/block/Block";
import { template } from "./template";

type IChatPageProps = {
    imgSrc: string,
}

export class ChatPage extends Block<IChatPageProps, TChildren> {
    constructor(props: IChatPageProps) {
        super({...props}, {});
    }

    render (): string {
        return template({});
    }
}