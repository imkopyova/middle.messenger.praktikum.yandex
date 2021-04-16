import { template } from "./template";
import { Block } from "../../components/block/Block";
import { Button } from "../../components/button/Button";

type IPasswordEditPageProps = {
    imgSrc: string,
}

type IPasswordEditPageChildren = {
    button: any,
}

export class PasswordEditPage extends Block<IPasswordEditPageProps, IPasswordEditPageChildren> {
    constructor(props: IPasswordEditPageProps) {
        super(
            {...props}, 
            {
                button: 
                    new Button({
                        text: "Сохранить",
                        onClick: () => console.log("event from child component")}
                    )
            }
        );
    }

    render () {
        return template({
            imgSrc: this.props.imgSrc,
            button: this.children.button.getElement(),
           
        });
    }
}