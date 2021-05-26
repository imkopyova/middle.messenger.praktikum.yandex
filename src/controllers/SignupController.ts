import { AuthAPI } from "../api/auth-api";
import { TSignupData } from "../domain/value-objects/TSignupData";
import { router, ROUTES } from "../router";

const authAPI = new AuthAPI();

export class SignupController {
    public async signup(data: TSignupData) {
        try {
            const { status } = await authAPI.signup(data);
            if (status === 200) {
                router.go(ROUTES.CHAT);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

}