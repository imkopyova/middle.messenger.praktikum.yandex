import { AuthAPI } from "../api/auth-api";
import { router, ROUTES } from "../router";

const authAPI = new AuthAPI();

export class LogoutController {
    public async logout() {
        try {
            const { status } = await authAPI.logout();
            if (status === 200) {
                router.go(ROUTES.LOGIN);
            }
        } catch (error) {
        }
    }

}