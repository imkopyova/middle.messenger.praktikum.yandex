import { AuthAPI } from "../api/auth-api";
import { Store, STORE_EVENTS } from "../helpers/Store";

const authAPI = new AuthAPI();
export const userStore = new Store();

export class UserController {
    public async getUserData(callback: (storeData: unknown) => void) {
        userStore.on(STORE_EVENTS.UPDATE, callback);

        try {
            const { response } = await authAPI.getUser();
            const userData = JSON.parse(response as string);
            userStore.update(userData);
        } catch (error) {
            console.log(error)
        }
    }
}