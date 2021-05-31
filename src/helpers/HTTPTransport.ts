import { parseJSON } from "../helpers/parseJSON";

enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

enum CREDENTIALS {
    omit = "omit",
    sameOrigin = "same-origin",
    include = "include"
}

enum MODE {
    sameOrigin = "same-origin",
    noCors = "no-cors",
    cors = "cors",
    navigate = "navigate"
}

type Options<TRequest> = {
    method: METHOD,
    headers?: { [key: string]: string },
    timeout?: number,
    credentials?: CREDENTIALS,
    mode?: MODE,
    data?: TRequest,
}

type OptionsWithoutMethod<TRequest> = Omit<Options<TRequest>, "method">;

function queryStringify<TRequest>(data: TRequest ) {
    if (typeof data !== "object") {
        throw new Error("Data must be object");
    }
    const values = [];
    for (const key in data) {
        values.push(`${key}=${data[key]}`);
    }
    return "?" + values.join("&");
}

type TPromiseResponse = {
    response: unknown,
    status: number
}

export class HTTPTransport<TRequest> {

    get = async (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<unknown> => {
        const { response, status } = await this.request(url, {...options, method: METHOD.GET});
        if (status !== 200) {
            throw new Error(parseJSON(response).reason);
        }
        return response;
    };

    put = async (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<unknown> => {
        const { response, status } = await this.request(url, {...options, method: METHOD.PUT});
        if (status !== 200) {
            throw new Error(parseJSON(response).reason);
        }
        return response;
    };

    post = async (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<unknown> => {
        const { response, status } = await this.request(url, {...options, method: METHOD.POST});
        if (status !== 200) {
            throw new Error(parseJSON(response).reason);
        }
        return response;
    }

    delete = async (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<unknown> => {
        const { response, status } = await this.request(url, {...options, method: METHOD.DELETE});
        if (status !== 200) {
            throw new Error(parseJSON(response).reason);
        }
        return response;
    }

    request(url: string, options: Options<TRequest> = {method: METHOD.GET}): Promise<TPromiseResponse> {
        const {method, data, credentials = CREDENTIALS.include, headers = {"Content-Type": "application/json"}, timeout = 5000} = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject("No method");
                return;
            }

            const xhr = new XMLHttpRequest();

            xhr.open(method, (method === METHOD.GET && !!data) ? `${url}${queryStringify(data)}` : url);
            
            xhr.withCredentials = credentials === CREDENTIALS.include;

            Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));

            xhr.onload = function() {
                resolve({
                    response: xhr.response,
                    status: xhr.status
                });
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}

