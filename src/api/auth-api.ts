import { HTTPTransport } from "../helpers/HTTPTransport";
import { BaseAPI, API_URL } from "./base-api";
import { TSigninData } from "../domain/value-objects/TSigninData";

const AuthAPIInstance = new HTTPTransport<TSigninData, unknown>();
const AUTH_URL = `${API_URL}/auth`;

export class AuthAPI extends BaseAPI {
    public login(data: TSigninData) {
        return AuthAPIInstance.post(`${AUTH_URL}/signin`, { data: data });
    }
    public async getUser() {
        return JSON.parse(await AuthAPIInstance.get(`${AUTH_URL}/user`) as string);
    }
}