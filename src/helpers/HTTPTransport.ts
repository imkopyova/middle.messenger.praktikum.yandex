enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

type Options = {
    method: METHOD,
    headers?: { [key: string]: string },
    timeout?: number,
    data?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
}

type OptionsWithoutMethod = Omit<Options, "method">;

function queryStringify(data: { [key: string]: string} ) {
    if (typeof data !== "object") {
        throw new Error("Data must be object");
    }
    const values = [];
    for (const key in data) {
        values.push(`${key}=${data[key]}`);
    }
    return "?" + values.join("&");
}

export class HTTPTransport {

    get = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHOD.GET});
    };

    put = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHOD.PUT});
    };

    post = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHOD.POST});
    }

    delete = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHOD.DELETE});
    }

    request(url: string, options: Options = {method: METHOD.GET}): Promise<XMLHttpRequest> {
        const {method, data, headers = {}, timeout = 5000} = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject("No method");
                return;
            }

            const xhr = new XMLHttpRequest();

            xhr.open(method, (method === METHOD.GET && !!data) ? `${url}${queryStringify(data)}` : url);

            Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));

            xhr.onload = function() {
                resolve(xhr);
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

