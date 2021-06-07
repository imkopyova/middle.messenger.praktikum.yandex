import { Store } from "../helpers/Store";

export const socketStore = new Store<{socket: WebSocket}>();