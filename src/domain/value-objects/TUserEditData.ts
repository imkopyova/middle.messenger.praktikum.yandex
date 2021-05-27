import { TUser } from "../entities/TUser";

export type TUserEditData = Pick<TUser, "first_name" | "second_name" | "display_name" | "login" | "email" | "phone">