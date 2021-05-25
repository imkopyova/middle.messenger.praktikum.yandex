import { EventBus } from "./EventBus";

export enum STORE_EVENTS {
    UPDATE = "update"
}

export class Store<T> extends EventBus {
    state: T | null;

    constructor(initialData: T | null = null) {
        super();
        this.state = initialData;
    }

    get() {
        return this.state;
    }

    update(newData: T): void {
        this.state = {...this.state, ...newData};
        this.emit(STORE_EVENTS.UPDATE, newData);
    }

}
