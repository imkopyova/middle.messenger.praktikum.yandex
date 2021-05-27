import { UserAPI } from "../api/user-api";
import { TUserEditData } from "../domain/value-objects/TUserEditData";
import { TPasswordData } from "../domain/value-objects/TPasswordData";
import { router, ROUTES } from "../router";
import { userStore } from "../stores/userStore";

const userAPI = new UserAPI();

export class EditProfileController {
    public async edit(data: TUserEditData) {
        try {
            const { status } = await userAPI.put(data);
            if (status === 200) {
                router.go(ROUTES.PROFILE);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    public async editAvatar(data: unknown) {
        try {
            const { response, status } = await userAPI.putAvatar(data);
            console.log(response);
            if (status === 200) {
                // userStore.update(JSON.parse(response as string));
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    public async editPassword(data: TPasswordData) {
        try {
            const { response, status } = await userAPI.putPassword(data);
            console.log(response);
            if (status === 200) {
                router.go(ROUTES.PROFILE);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}