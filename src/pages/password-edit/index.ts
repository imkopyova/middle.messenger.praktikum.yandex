import { PasswordEditPage } from "./PasswordEditPage.js";

const root = document.querySelector(".root");
const pageContent = new PasswordEditPage({
    test: "что-то",
    imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
});

root && root.append(pageContent.getElement());
