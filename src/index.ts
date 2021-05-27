import { ChatPage } from "./pages/chat/ChatPage";
import { Error404Page } from "./pages/404/Error404Page";
import { Error500Page } from "./pages/500/Error500Page";
import { LoginPage } from "./pages/login/LoginPage";
import { PasswordEditPage } from "./pages/password-edit/PasswordEditPage";
import { ProfileEditPage } from "./pages/profile-edit/ProfileEditPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { router, ROUTES } from "./router";
import { SigninPage } from "./pages/signin/SigninPage";

router
    .use(ROUTES.LOGIN, new LoginPage())
    .use(ROUTES.SIGNIN, new SigninPage())
    .use(ROUTES.PROFILE_EDIT, new ProfileEditPage())
    .use(ROUTES.PASSWORD_EDIT, new PasswordEditPage({
        imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
    }))
    .use(ROUTES.CHAT, new ChatPage({
        imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
    }))
    .use(ROUTES.PROFILE, new ProfilePage())
    .use(ROUTES.SERVER_ERROR, new Error500Page({
        errorCode: "500",
        errorText: "Мы уже фиксим",
    }))
    .use(ROUTES.NOT_FOUND, new Error404Page({
        errorCode: "404",
        errorText: "Не туда попали"
    }))
    .start();
