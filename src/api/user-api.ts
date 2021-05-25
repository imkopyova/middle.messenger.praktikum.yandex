import { HTTPTransport } from "../helpers/HTTPTransport";
import { BaseAPI, API_URL } from "./base-api";
import { TUser } from "../domain/entities/TUser";

const userAPIInstance = new HTTPTransport<number, TUser>();

export class UserAPI extends BaseAPI {
    request(id: number) {
        return userAPIInstance.get(`${API_URL}/user/${id}`);
    }
}