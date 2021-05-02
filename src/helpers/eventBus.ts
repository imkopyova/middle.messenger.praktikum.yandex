type TListener = <T>(...args: T[]) => void;

export class EventBus {
    listeners: {[key: string]: TListener[]};

    constructor() {
        this.listeners = {};
    }
  
    on(event: string, callback: TListener): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }
  
    off(event: string, callback: TListener): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: TListener) => listener !== callback
        );
    }
  
    emit<T>(event: string, ...args: T[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener: TListener) {
            listener(...args);
        });
    }
}