import { template } from "./template.js";
import { Block, TProps, TChildren } from "../../components/block/Block.js";
import { Button } from "../../components/button/Button.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

interface IPasswordEditPageProps extends TProps {
    imgSrc: string,
    test: string
}

interface IPasswordEditPageChildren extends TChildren {
    button: HTMLElement,
}

export class PasswordEditPage extends Block<IPasswordEditPageProps, IPasswordEditPageChildren> {
    constructor(props: IPasswordEditPageProps) {
        super(
            {...props}, 
            {
                button: parseStringToHtml(
                    new Button({
                        text: "Сохранить",
                        onClick: () => console.log("button")}
                    ).render()
                )
            }
        );
    }

    render () {
        return template({
            imgSrc: this.props.imgSrc,
            test: this.props.test,
            button: this.children.button,
           
        });
    }
}