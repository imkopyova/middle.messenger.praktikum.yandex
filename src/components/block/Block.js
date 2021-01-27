import { EventBus } from "../../helpers/eventBus.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

export class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };
  
    _element = null;
    _meta = null;
  
    constructor(tagName = "div", props = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
  
        this.props = this._makePropsProxy(props);
    
        this.eventBus = () => eventBus;
    
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
  
    _registerEvents(eventBus) {
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
  
    componentDidMount(oldProps) {}
  
    _componentDidUpdate(oldProps, newProps) {
        if (JSON.stringify(newProps) == JSON.stringify(oldProps)) {
            return false;
        }
        const response = this.componentDidUpdate(oldProps, newProps);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        return response;
    }
  
    componentDidUpdate(oldProps, newProps) {
        return true;
    }
  
    setProps = nextProps => {
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
        const block = this.render();
        this._element.append(parseStringToHtml(block));
        
    }
  
    render() {}
  
    getContent() {
        return this.element;
    }
  
    _makePropsProxy(props) {
        const self = this;
    
        const proxyProps = new Proxy(props, {
            set(target, prop, value) {
                target[prop] = value;
                return true;
            },
            deleteProperty(target, prop) {
                throw new Error("нет доступа");
                return false;
            }
        })
        return proxyProps;
    }
  
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
  
    show() {
        this._element.style.display = "block";
    }
  
    hide() {
        this._element.style.display = "none";
    }
}
