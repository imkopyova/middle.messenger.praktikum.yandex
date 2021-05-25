import { Router } from "./helpers/Router";

export enum ROUTES {
    LOGIN = "/login",
    SIGNIN = "/signin",
    PROFILE_EDIT = "/profile-edit",
    PASSWORD_EDIT = "/password-edit",
    CHAT = "/chat",
    PROFILE = "/profile",
    SERVER_ERROR = "/500",
    NOT_FOUND = "/404",
}

export const router = new Router(".root");