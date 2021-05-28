import { router, ROUTES } from "../router";
import { AuthAPI } from "../api/auth-api";
import { userStore } from "../stores/userStore";

const authAPI = new AuthAPI();

export class AuthController {
    public async auth() {
        try {
            const { status, response } = await authAPI.auth();
            if (status !== 200) {
                userStore.update(JSON.parse(response as string));
                router.go(ROUTES.LOGIN);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    public async redirectToChat() {
        try {
            const { status } = await authAPI.auth();
            if (status === 200) {
                router.go(ROUTES.HOME);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

}