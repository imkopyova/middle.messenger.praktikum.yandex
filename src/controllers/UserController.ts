import { AuthAPI } from "../api/auth-api";
import { Store, STORE_EVENTS } from "../helpers/Store";

const authAPI = new AuthAPI();
export const userStore = new Store();

export class UserController {
    public async getUserData(callback: (storeData: unknown) => void) {
        userStore.on(STORE_EVENTS.UPDATE, callback);

        try {
            const userData = await authAPI.getUser();
            userStore.update(userData);
        } catch (error) {
            console.warn(error)
        }
    }
}