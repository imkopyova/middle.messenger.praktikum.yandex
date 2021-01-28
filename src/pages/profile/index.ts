import { ProfilePage } from "./ProfilePage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new ProfilePage({
    imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    mail: "pochta@yandex.ru",
    login: "johndoe",
    first_name: "John",
    last_name: "Doe",
    nickname: "John",
    phone: "+7 (909) 967 30 30",
}).render();

root && root.append(parseStringToHtml(pageContent));