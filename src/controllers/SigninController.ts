import { AuthAPI } from "../api/auth-api";
import { TSigninData } from "../domain/value-objects/TSigninData";
import { Store } from "../helpers/Store";

const authAPI = new AuthAPI();

export class SigninController {
    public async signin(data: TSigninData) {
        try {
            await authAPI.login(data);
        } catch (error) {
            console.warn(error)
        }
    }
}