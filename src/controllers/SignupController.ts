import { router, ROUTES } from "../router";
import { AuthAPI } from "../api/auth-api";
import { TSignupData } from "../domain/value-objects/TSignupData";

const authAPI = new AuthAPI();

export class SignupController {
    public async signup(data: TSignupData) {
        try {
            const { status } = await authAPI.signup(data);
            if (status === 200) {
                router.go(ROUTES.HOME);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

}