import { EventBus } from "../../helpers/eventBus";
import { parseStringToHtml } from "../../helpers/parseStringToHtml";

export type TProps = {
    [key: string]: string | number | boolean | Function | undefined,
    onClick?: (e?: Event) => void,
};
export type TChildren = {[key: string]: any};

export class Block<T extends TProps, C extends TChildren> {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };
  
    _element: HTMLElement;
    props: T;
    children: C;
    eventBus: EventBus;
  
    constructor(props: T, children: C) {
        const eventBus = new EventBus();
  
        this.props = this._makePropsProxy(props);
        this.children = children || {};
    
        this.eventBus = eventBus;
    
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
  
    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
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

    _addChildrenEventListeners(children: TChildren): void {
        for (let name in children) {
            const childProps = children[name].props;

            if (childProps.onClick) {
                const elementChildren = this._element.querySelectorAll(`[data-child="${name}"]`)
                for (let child of elementChildren) {
                    child.addEventListener("click", childProps.onClick)
                }
            }
        }
    }
  
    _createResources() {
        const tagName = "div";
        this._element = document.createElement(tagName);
    }
  
    init() {
        this._createResources();
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
  
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  
    _componentDidUpdate(oldProps: T, newProps: T) {

        if (JSON.stringify(newProps) == JSON.stringify(oldProps)) {
            return false;
        }
        const response = this.componentDidUpdate();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);

        return response;
    }
  
    _render() {
        const block = parseStringToHtml(this.render());
        this._element.firstElementChild  ? this._element.replaceChild(block, this._element.firstElementChild ) : this._element.append(block);
        
        if (this.props.onClick) {
            block.addEventListener("click", this.props.onClick)
        }
        this._addChildrenEventListeners(this.children);
    }

    setProps = (nextProps: T) => {
        if (!nextProps) {
            return;
        }
        const oldProps = {...this.props};
        this.props = {...oldProps, ...nextProps};
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
    };

    componentDidMount(): void {}
    componentDidUpdate(): boolean { return true }
    render(): string { return "" }

    get element() {
        return this._element;
    }

    getElement(): HTMLElement {
        return this.element;
    }
  
    show() {
        this.getElement().style.display = "block";
    }
  
    hide() {
        this.getElement().style.display = "none";
    }
}
