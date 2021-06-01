import { AuthAPI } from "../api/auth-api";
import { STORE_EVENTS } from "../helpers/Store";
import { userStore } from "../stores/userStore";

const authAPI = new AuthAPI();

export class UserController {
    public async getUserData(callback: (storeData: unknown) => void) {
        userStore.on(STORE_EVENTS.UPDATE, callback);
        try {
            const userData = await authAPI.getUser();
            userStore.update(userData);
        } catch (error) {
            console.log(error);
        }
    }
}