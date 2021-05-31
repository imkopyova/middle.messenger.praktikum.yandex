import { router, ROUTES } from "../router";
import { AuthAPI } from "../api/auth-api";
import { userStore } from "../stores/userStore";
import { STORE_EVENTS } from "../helpers/Store";

const authAPI = new AuthAPI();

export class AuthController {
    public async auth(callback: (storeData: any) => void) {
        userStore.on(STORE_EVENTS.UPDATE, callback);
        try {
            const response = await authAPI.auth();
            userStore.update(response);
        } catch (error) {
            console.error(error);
            router.go(ROUTES.LOGIN);
        }
    }

    public async redirectToChat() {
        try {
            await authAPI.auth();
            router.go(ROUTES.HOME);
            
        } catch (error) {
            console.error(error);
        }
    }

}