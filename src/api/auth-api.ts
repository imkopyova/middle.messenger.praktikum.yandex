import { HTTPTransport } from "../helpers/HTTPTransport";
import { BaseAPI, API_URL } from "./base-api";
import { TSigninData } from "../domain/value-objects/TSigninData";
import { TSignupData } from "../domain/value-objects/TSignupData";

const AuthAPIInstance = new HTTPTransport<TSigninData, unknown>();
const AUTH_URL = `${API_URL}/auth`;

export class AuthAPI extends BaseAPI {
    public login(data: TSigninData) {
        return AuthAPIInstance.post(`${AUTH_URL}/signin`, { data: data });
    }

    public signup(data: TSignupData) {
        return AuthAPIInstance.post(`${AUTH_URL}/signup`, { data: data })
    }

    public getUser() {
        return AuthAPIInstance.get(`${AUTH_URL}/user`);
    }

    public logout() {
        return AuthAPIInstance.post(`${AUTH_URL}/logout`);
    }
}