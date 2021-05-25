import { HTTPTransport } from "../helpers/HTTPTransport";
import { BaseAPI } from "./base-api";

const chatAPIInstance = new HTTPTransport();

export class ChatAPI extends BaseAPI {
    request() {
        return chatAPIInstance.get("api/v1/chats/", {data : {title: "string"}});
    }
}