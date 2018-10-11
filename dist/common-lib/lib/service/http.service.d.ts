import { HttpClient } from '@angular/common/http';
export declare class HttpService {
    private _http;
    private _url;
    private baseUrl;
    constructor(_http: HttpClient);
    readonly procurantContext: any;
    getContext(): {
        url: any;
        addParam: any;
        get: any;
        post: any;
        put: any;
        delete: any;
    };
    private createHeader;
    private url;
    private addParam;
    private get;
    private post;
    private put;
    private delete;
    private setBaseUrl;
    private getBaseUrl;
}
