import { Block } from "../../components/block/Block";
import { Button } from "../../components/button/Button";
import { template } from "./template";

type IPasswordEditPageProps = {
    imgSrc: string,
}

type IPasswordEditPageChildren = {
    button: any, // eslint-disable-line @typescript-eslint/no-explicit-any
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

    render (): string {
        return template({
            imgSrc: this.props.imgSrc,
            button: this.children.button.getElement(),
           
        });
    }
}