import { IBlock } from "../components/block/Block";

function render(query: string, block: IBlock) {
    const root = document.querySelector(query);
    root && root.append(block.element);
    return root;
}

export type TRouteProps = {
    [key: string]: string;
};

class Route {
    _pathname: string;
    _blockClass: any;
    _block: IBlock | null;
    _props: TRouteProps;
    _lastPathname: string;

    constructor(pathname: string, view: any, props: TRouteProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
            this._lastPathname = pathname;
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return !!pathname.match(this._pathname); 
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            this._block && render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }

    getPathname() {
        return this._lastPathname;
    }
}

export class Router {
    static __instance: Router;

    routes: Route[];
    history: History;
    _currentRoute: Route | null;
    _rootQuery: string;

    constructor(rootQuery?: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery || "";

        Router.__instance = this;
    }

    use(pathname: string, block: any): Router {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    start(): void {
        window.addEventListener("popstate", (event) => {
            // eslint-disable-next-line
            // @ts-ignore: Свойство "location" не существует в типе "EventTarget"
            this._onRoute(event.currentTarget.location.pathname);
        });

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string): void {
        const route = this.getRoute(pathname);

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        if (route) {
            route.render();
        }
    }

    go(pathname: string): void {
        this.history.pushState({url: pathname}, pathname, pathname);
        this._onRoute(pathname);
    }

    back(): void {
        this.history.back();
    }

    forward(): void {
        this.history.forward();
    }

    getRoute(pathname: string): Route | null {
        return this.routes.find(route => route.match(pathname)) || null;
    }

    getCurrentRoute(): string | null {
        return document.URL;
    }

    // TO DO refactor
    getUrlParam(): string {
        return document.URL.split("/").reverse()[0];
    }
}