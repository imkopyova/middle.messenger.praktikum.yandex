import { router, ROUTES } from "../router";
import { TPasswordData } from "../domain/value-objects/TPasswordData";
import { TUserEditData } from "../domain/value-objects/TUserEditData";
import { UserAPI } from "../api/user-api";

const userAPI = new UserAPI();

export class EditProfileController {
    public async edit(data: TUserEditData) {
        try {
            await userAPI.put(data);
            router.go(ROUTES.PROFILE);
        } catch (error) {
            console.log(error);
        }
    }

    public async editAvatar(data: unknown) {
        try {
            await userAPI.putAvatar(data);
        } catch (error) {
            console.log(error);
        }
    }

    public async editPassword(data: TPasswordData) {
        try {
            await userAPI.putPassword(data);
            router.go(ROUTES.PROFILE);
        } catch (error) {
            console.log(error);
        }
    }
}