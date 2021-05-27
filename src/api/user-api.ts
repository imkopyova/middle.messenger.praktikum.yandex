import { HTTPTransport } from "../helpers/HTTPTransport";
import { BaseAPI, API_URL } from "./base-api";
import { TUser } from "../domain/entities/TUser";
import { TUserEditData } from "../domain/value-objects/TUserEditData";

const userAPIInstance = new HTTPTransport<unknown, TUser>();
const USER_URL = `${API_URL}/user`;

export class UserAPI extends BaseAPI {
    request(id: number) {
        return userAPIInstance.get(`${USER_URL}/${id}`);
    }

    public put(data: TUserEditData) {
        return userAPIInstance.put(`${USER_URL}/profile`, { data: data });
    }

    public putAvatar(data: unknown) {
        return userAPIInstance.put(`${USER_URL}/profile/avatar`, { data: data });
    }
}