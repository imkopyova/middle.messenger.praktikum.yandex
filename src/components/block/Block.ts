import { EventBus } from "../../helpers/eventBus.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

export type TProps = {[key: string]: unknown};
export type TChildren = {[key: string]: HTMLElement};

type TBlockConstructor<T> = {
    tagName: string,
    props: T,
}

export class Block<T extends TProps, C extends TChildren,> {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };
  
    _element: HTMLElement;
    _meta: TBlockConstructor<T>;
    props: T;
    children: C;
    eventBus: () => EventBus;
  
    constructor(tagName: string, props: T, children: C) {
        const eventBus = new EventBus();
        this._meta = {
            tagName: tagName || "div",
            props
        };
  
        this.props = this._makePropsProxy(props);
        this.children = children || {};
    
        this.eventBus = () => eventBus;
    
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
  
    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
  
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
  
    init() {
        this._createResources();
        this._render();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
  
    _componentDidMount() {
        this.componentDidMount();
    }
  
    componentDidMount(oldProps?: T) {}
  
    _componentDidUpdate(oldProps: T, newProps: T) {
        if (JSON.stringify(newProps) == JSON.stringify(oldProps)) {
            return false;
        }
        const response = this.componentDidUpdate(oldProps, newProps);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        return response;
    }
  
    componentDidUpdate(oldProps?: T, newProps?: T) {
        return true;
    }
  
    setProps = (nextProps: T) => {
        if (!nextProps) {
            return;
        }
    
        const oldProps = {...this.props};
        Object.assign(this.props, nextProps);
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
    };
  
    get element() {
        return this._element;
    }
  
    _render() {
        const block = parseStringToHtml(this.render());

        // if (this.children) {
        //     for(let child in this.children) {
        //         const childElement = this.children[child];
        //         const childContainer = (block as HTMLElement).querySelector(`[data-child='${child}']`);
        //         childContainer?.append(childElement);
        //     }
        // }
        this._element.append(block);
    }
  
    render(): string {
        return "";
    }
  
    getContent() {
        return this.element;
    }
  
    _makePropsProxy(props: T): T {
        const proxyProps = new Proxy(props, {
            set(target: T, prop: keyof T, value) {
                target[prop] = value;
                return true;
            },
            deleteProperty() {
                throw new Error("нет доступа");
            }
        })
        return proxyProps;
    }
  
    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }
  
    show() {
        this._element.style.display = "block";
    }
  
    hide() {
        this._element.style.display = "none";
    }

    getElement(): HTMLElement {
        return this._element;
    }
}
