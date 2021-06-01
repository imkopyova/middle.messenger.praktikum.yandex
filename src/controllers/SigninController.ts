import { router, ROUTES } from "../router";
import { AuthAPI } from "../api/auth-api";
import { TSigninData } from "../domain/value-objects/TSigninData";

const authAPI = new AuthAPI();

export class SigninController {
    public async signin(data: TSigninData) {
        try {
            await authAPI.login(data);
            router.go(ROUTES.HOME);
        } catch (error) {
            console.log(error);
        }
    }

}