import { Block, TChildren } from "../../components/block/Block";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";
import "../../styles/message/styles.css";

export type IMessageProps = {
    text: string,
    time: string,
    isAuthorMe: boolean,
    className?: string,
}

export class Message extends Block<IMessageProps, TChildren> {
    constructor(props: IMessageProps) {
        super({...props}, {});
    }

    render (): string {
        return template({
            text: this.props.text,
            time: this.props.time,
            isAuthorMe: this.props.isAuthorMe,
            className: this.props.className
        });
    }
}