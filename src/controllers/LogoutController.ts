import { router, ROUTES } from "../router";
import { AuthAPI } from "../api/auth-api";

const authAPI = new AuthAPI();

export class LogoutController {
    public async logout() {
        try {
            const { status } = await authAPI.logout();
            if (status === 200) {
                router.go(ROUTES.LOGIN);
            }
        } catch (error) {
            console.log(error);
        }
    }

}