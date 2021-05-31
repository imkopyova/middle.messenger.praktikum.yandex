import { API_URL } from "./base-api";
import { HTTPTransport } from "../helpers/HTTPTransport";
import { TPasswordData } from "../domain/value-objects/TPasswordData";
import { TUserEditData } from "../domain/value-objects/TUserEditData";

const userAPIInstance = new HTTPTransport<unknown>();
const USER_URL = `${API_URL}/user`;

export class UserAPI {
    public put(data: TUserEditData) {
        return userAPIInstance.put(`${USER_URL}/profile`, { data: data });
    }

    public putAvatar(data: unknown) {
        return userAPIInstance.put(`${USER_URL}/profile/avatar`, { data: data });
    }

    public putPassword(data: TPasswordData) {
        return userAPIInstance.put(`${USER_URL}/password`, { data: data });
    }
}