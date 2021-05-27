import { TUser } from "./TUser";

export type TChat = {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: {
      user: TUser,
      time: string,
      content: string
    }
  }