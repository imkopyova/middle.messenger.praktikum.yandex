import { template } from "./template";
import { Block, TProps, TChildren } from "../../components/block/Block";

interface IProfilePageProps extends TProps {
    imgSrc: string,
    mail: string,
    login: string,
    first_name: string,
    last_name: string,
    nickname: string,
    phone: string,
}

export class ProfilePage extends Block<IProfilePageProps, TChildren> {
    constructor(props: IProfilePageProps) {
        super({ ...props}, {});
    }

    render () {
        return template({
            imgSrc: this.props.imgSrc,
            mail: this.props.mail,
            login: this.props.login,
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            nickname: this.props.nickname,
            phone: this.props.phone,
        });
    }
}