import { template } from "./template.js";
import { Block, TProps, TChildren } from "../../components/block/Block.js";
import { Button } from "../../components/button/Button.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

interface IPasswordEditPageProps extends TProps {
    imgSrc: string,
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
                        onClick: (e) => console.log(e)}
                    ).render()
                )
            }
        );
    }

    render () {
        return template({
            imgSrc: this.props.imgSrc,
            button: this.children.button,
           
        });
    }
}