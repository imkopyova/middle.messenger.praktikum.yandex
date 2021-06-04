import { router, ROUTES } from "./router";
import { ChatPage } from "./pages/chat/ChatPage";
import { ChatsPage } from "./pages/chats/ChatsPage";
import { Error404Page } from "./pages/404/Error404Page";
import { Error500Page } from "./pages/500/Error500Page";
import { LoginPage } from "./pages/login/LoginPage";
import { PasswordEditPage } from "./pages/password-edit/PasswordEditPage";
import { ProfileEditPage } from "./pages/profile-edit/ProfileEditPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { SigninPage } from "./pages/signin/SigninPage";
import { childComponentHelper, childComponentArrayHelper, isEqualHelper } from "./helpers/handlebarHelper";

childComponentHelper();
childComponentArrayHelper();
isEqualHelper();

router
    .use(ROUTES.CHAT, ChatPage)
    .use(ROUTES.LOGIN, LoginPage)
    .use(ROUTES.SIGNIN, SigninPage)
    .use(ROUTES.PROFILE_EDIT, ProfileEditPage)
    .use(ROUTES.PASSWORD_EDIT, PasswordEditPage)
    .use(ROUTES.PROFILE, ProfilePage)
    .use(ROUTES.SERVER_ERROR, Error500Page)
    .use(ROUTES.NOT_FOUND, Error404Page)
    .use(ROUTES.HOME, ChatsPage)
    .start();
