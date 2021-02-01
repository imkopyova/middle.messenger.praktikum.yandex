import { template } from "./template.js";
import { Block } from "../../components/block/Block.js";
import { Button } from "../../components/button/Button.js";

type IPasswordEditPageProps = {
    imgSrc: string,
}

type IPasswordEditPageChildren = {
    button: HTMLElement,
}

export class PasswordEditPage extends Block<IPasswordEditPageProps, IPasswordEditPageChildren> {
    constructor(props: IPasswordEditPageProps) {
        super(
            {...props}, 
            {
                button: 
                    new Button({
                        text: "Сохранить",
                        onClick: (e) => console.log(e)}
                    ).getElement()
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