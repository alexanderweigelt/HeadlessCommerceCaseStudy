export interface ConfigurationParameters {
    basePath?: string; // override base path
    headers?: HTTPHeaders; //header params we want to use on every request
}

export class Configuration {
    private configuration: ConfigurationParameters

    constructor(configuration: ConfigurationParameters = {}) {
        this.configuration = configuration
    }

    set config(configuration: Configuration) {
        this.configuration = configuration;
    }

    get basePath(): string {
        const BASE_PATH = "http://localhost".replace(/\/+$/, "");
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }

    get headers(): HTTPHeaders | undefined {
        return this.configuration.headers;
    }
}

export const DefaultConfig = new Configuration();

export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration: Configuration = DefaultConfig) {
        this.configuration = configuration;
    }

    protected async request(context: RequestOpts): Promise<Response> {
        const { url, init } = await this.createFetchParams(context);
        const response = await this.fetchApi(url, init);
        if (response && (response.status >= 200 && response.status < 300)) {
            return response;
        }
        throw new ResponseError(response, 'Response returned an error code');
    }

    private async createFetchParams(context: RequestOpts) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + querystring(context.query);
        }
        const headers = Object.assign({}, this.configuration.headers, context.headers);
        Object.keys(headers).forEach(key => headers[key] === undefined ? delete headers[key] : {});
        const init = {
            method: context.method,
            headers,
            body: context.body,
        };
        return { url, init };
    }

    private fetchApi = async (url: string, init: RequestInit) => {
        let fetchParams = { url, init };
        let response = undefined;
        try {
            response = await fetch(fetchParams.url, fetchParams.init);
        } catch (e) {
            if (e instanceof Error) {
                throw new FetchError(
                    e,
                    'The request failed and the interceptors did not return an alternative response'
                );
            } else {
                throw e;
            }
        }
        return response;
    }
}

export class ResponseError extends Error {
    public response: Response
    override name: "ResponseError" = "ResponseError";
    constructor(response: Response, msg?: string) {
        super(msg);
        this.response = response;
    }
}

export class FetchError extends Error {
    private cause: Error
    override name: "FetchError" = "FetchError";
    constructor(cause: Error, msg?: string) {
        super(msg);
        this.cause = cause;
    }
}

export class RequiredError extends Error {
    private field: string
    override name: "RequiredError" = "RequiredError";
    constructor(field: string, msg?: string) {
        super(msg);
        this.field = field;
    }
}

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = {
    // eslint-disable-next-line max-len
    [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery
};
export type HTTPBody = Json | FormData | URLSearchParams;

export interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}

export function exists(json: any, key: string) {
    const value = json[key];
    return value !== null && value !== undefined;
}

function querystring(params: HTTPQuery, prefix: string = ''): string {
    return Object.keys(params)
        .map(key => querystringSingleKey(key, params[key], prefix))
        .filter(part => part.length > 0)
        .join('&');
}

function querystringSingleKey(
    // eslint-disable-next-line max-len
    key: string, value: string | number | null | undefined | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery, keyPrefix: string = ''
): string {
    const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
    if (value instanceof Array) {
        const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
            .join(`&${encodeURIComponent(fullKey)}=`);
        return `${encodeURIComponent(fullKey)}=${multiValue}`;
    }
    if (value instanceof Set) {
        const valueAsArray = Array.from(value);
        return querystringSingleKey(key, valueAsArray, keyPrefix);
    }
    if (value instanceof Date) {
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
    }
    if (value instanceof Object) {
        return querystring(value as HTTPQuery, fullKey);
    }
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}

export interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}

export interface ResponseTransformer<T> {
    (json: any): T;
}

export class JSONApiResponse<T> {
    public raw: Response;
    constructor(raw: Response, private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue) {
        this.raw = raw
    }
    async value(): Promise<T> {
        return this.transformer(await this.raw.json());
    }
}

export class VoidApiResponse {
    public raw: Response;
    constructor(raw: Response) {
        this.raw = raw;
    }
    async value(): Promise<void> {
        return undefined;
    }
}
