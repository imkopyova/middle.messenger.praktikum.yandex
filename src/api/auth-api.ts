import { API_URL } from "./base-api";
import { HTTPTransport } from "../helpers/HTTPTransport";
import { TSigninData } from "../domain/value-objects/TSigninData";
import { TSignupData } from "../domain/value-objects/TSignupData";
import { TUser } from "../domain/entities/TUser";
import { parseJSON } from "../helpers/parseJSON";

const AuthAPIInstance = new HTTPTransport<TSigninData>();
const AUTH_URL = `${API_URL}/auth`;

export class AuthAPI {
    public login(data: TSigninData): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/signin`, { data });
    }

    public signup(data: TSignupData): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/signup`, { data });
    }

    public async getUser(): Promise<TUser> {
        return parseJSON(await AuthAPIInstance.get(`${AUTH_URL}/user`));
    }

    public async auth(): Promise<TUser> {
        return parseJSON(await AuthAPIInstance.get(`${AUTH_URL}/user`));
    }

    public logout(): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/logout`);
    }
}