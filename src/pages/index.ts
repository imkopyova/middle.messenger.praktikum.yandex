import { ChatPage } from "../pages/chat/ChatPage";
import { Error404Page } from "../pages/404/Error404Page";
import { Error500Page } from "../pages/500/Error500Page";
import { LoginPage } from "../pages/login/LoginPage";
import { PasswordEditPage } from "../pages/password-edit/PasswordEditPage";
import { ProfileEditPage } from "../pages/profile-edit/ProfileEditPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { Router } from "../helpers/Router";
import { SigninPage } from "../pages/signin/SigninPage";

const router = new Router(".root");

router
    .use("/login/", new LoginPage())
    .use("/signin/", new SigninPage())
    .use("/profile-edit/", new ProfileEditPage({
        imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
    }))
    .use("/password-edit/", new PasswordEditPage({
        imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
    }))
    .use("/chat/", new ChatPage({
        imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
    }))
    .use("/profile/", new ProfilePage({
        imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
        mail: "pochta@yandex.ru",
        login: "johndoe",
        first_name: "John",
        last_name: "Doe",
        nickname: "John",
        phone: "+7 (909) 967 30 30",
    }))
    .use("/500/", new Error500Page({
        errorCode: "500",
        errorText: "Мы уже фиксим",
    }))
    .use("/404/", new Error404Page({
        errorCode: "404",
        errorText: "Не туда попали"
    }))
    .start();
