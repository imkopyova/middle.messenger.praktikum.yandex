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
    .use(ROUTES.CHAT, ChatPage)
    .use(ROUTES.LOGIN, LoginPage)
    .use(ROUTES.SIGNIN, SigninPage)
    .use(ROUTES.PROFILE_EDIT, ProfileEditPage)
    .use(ROUTES.PASSWORD_EDIT, PasswordEditPage)
    .use(ROUTES.PROFILE, ProfilePage)
    .use(ROUTES.SERVER_ERROR, Error500Page)
    .use(ROUTES.NOT_FOUND, Error404Page)
    .start();
