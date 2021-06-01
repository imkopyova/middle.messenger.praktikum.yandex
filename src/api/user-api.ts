import { API_URL } from "./base-api";
import { HTTPTransport } from "../helpers/HTTPTransport";
import { TPasswordData } from "../domain/value-objects/TPasswordData";
import { TUserEditData } from "../domain/value-objects/TUserEditData";
import { TUser } from "../domain/entities/TUser";
import { parseJSON } from "../helpers/parseJSON";

const userAPIInstance = new HTTPTransport<unknown>();
const USER_URL = `${API_URL}/user`;

export class UserAPI {
    public async put(data: TUserEditData): Promise<TUser> {
        return parseJSON(await userAPIInstance.put(`${USER_URL}/profile`, { data }));
    }

    public async putAvatar(data: unknown): Promise<TUser> {
        return parseJSON(await userAPIInstance.put(`${USER_URL}/profile/avatar`, { data }));
    }

    public putPassword(data: TPasswordData): Promise<unknown> {
        return userAPIInstance.put(`${USER_URL}/password`, { data });
    }
}