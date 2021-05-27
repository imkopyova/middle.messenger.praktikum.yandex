import { AuthAPI } from "../api/auth-api";
import { router, ROUTES } from "../router";

const authAPI = new AuthAPI();

export class AuthController {
    public async auth() {
        try {
            const { status } = await authAPI.auth();
            if (status !== 200) {
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
                router.go(ROUTES.CHAT);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

}