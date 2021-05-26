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

export class HTTPTransport<TRequest, TResponse> {

    get = (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<TPromiseResponse> => {
        return this.request(url, {...options, method: METHOD.GET});
    };

    put = (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<TPromiseResponse> => {
        return this.request(url, {...options, method: METHOD.PUT});
    };

    post = (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<TPromiseResponse> => {
        return this.request(url, {...options, method: METHOD.POST});
    }

    delete = (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<TPromiseResponse> => {
        return this.request(url, {...options, method: METHOD.DELETE});
    }

    request(url: string, options: Options<TRequest> = {method: METHOD.GET}): Promise<TPromiseResponse> {
        const {method, data, credentials = CREDENTIALS.include, mode = MODE.cors, headers = {"Content-Type": "application/json"}, timeout = 5000} = options;

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

