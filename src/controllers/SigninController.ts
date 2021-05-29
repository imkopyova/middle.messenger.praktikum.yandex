import { router, ROUTES } from "../router";
import { AuthAPI } from "../api/auth-api";
import { TSigninData } from "../domain/value-objects/TSigninData";

const authAPI = new AuthAPI();

export class SigninController {
    public async signin(data: TSigninData) {
        try {
            const { status } = await authAPI.login(data);
            if (status === 200) {
                router.go(ROUTES.HOME);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

}