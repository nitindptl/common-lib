/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:8081/";
    }
    /**
     * @return {?}
     */
    get procurantContext() {
        //this.baseUrl = this.globalConfig.baseApiUrl_Procurant;
        return this.getContext();
    }
    ;
    /**
     * @return {?}
     */
    getContext() {
        /** @type {?} */
        let context = {
            url: this.url.bind(this),
            addParam: this.addParam.bind(this),
            get: this.get.bind(this),
            post: this.post.bind(this),
            put: this.put.bind(this),
            delete: this.delete.bind(this)
        };
        return context;
    }
    /**
     * @param {?=} contentType
     * @return {?}
     */
    createHeader(contentType) {
        /** @type {?} */
        let headers = new HttpHeaders();
        headers.append('Content-Type', contentType ? contentType : 'application/json');
        return headers;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    url(url) {
        this._url = this.baseUrl + url;
        return this;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    addParam(key, value) {
        if (value != undefined) {
            if (this._url.indexOf("?") >= 0)
                this._url += "&" + key + "=" + value;
            else
                this._url += "?" + key + "=" + value;
        }
        return this;
    }
    /**
     * @param {?=} contentType
     * @return {?}
     */
    get(contentType) {
        /** @type {?} */
        let headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.get(this._url, {
                headers: headers
            });
        }
    }
    /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    post(data, contentType) {
        /** @type {?} */
        let headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.post(this._url, data, {
                headers: headers
            });
        }
    }
    /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    put(data, contentType) {
        /** @type {?} */
        let headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.put(this._url, data, {
                headers: headers
            });
        }
    }
    /**
     * @param {?=} contentType
     * @return {?}
     */
    delete(contentType) {
        /** @type {?} */
        let headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.delete(this._url, {
                headers: headers
            });
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    /**
     * @return {?}
     */
    getBaseUrl() {
        return this.baseUrl;
    }
}
HttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpService.ngInjectableDef = i0.defineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.inject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HttpService.prototype._url;
    /** @type {?} */
    HttpService.prototype.baseUrl;
    /** @type {?} */
    HttpService.prototype._http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFTL0QsTUFBTTs7OztJQUlKLFlBQW9CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7dUJBRlosd0JBQXdCO0tBR2pEOzs7O0lBRUQsSUFBSSxnQkFBZ0I7O1FBRWxCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQzFCO0lBQUEsQ0FBQzs7OztJQUVGLFVBQVU7O1FBQ1IsSUFBSSxPQUFPLEdBQUc7WUFDWixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDbEMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMvQixDQUFBO1FBQ0QsT0FBTyxPQUFPLENBQUM7S0FDaEI7Ozs7O0lBRU8sWUFBWSxDQUFDLFdBQW9COztRQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sT0FBTyxDQUFDOzs7Ozs7SUFHVCxHQUFHLENBQUMsR0FBVztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDOzs7Ozs7O0lBSU4sUUFBUSxDQUFDLEdBQVcsRUFBRSxLQUFzQjtRQUNsRCxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQzs7Z0JBRXJDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUM7Ozs7OztJQUdOLEdBQUcsQ0FBQyxXQUFvQjs7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQy9CLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNKOzs7Ozs7O0lBR0ssSUFBSSxDQUFDLElBQUksRUFBRSxXQUFvQjs7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO2dCQUN0QyxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7U0FDSjs7Ozs7OztJQUdLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsV0FBb0I7O1FBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtnQkFDckMsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1NBQ0o7Ozs7OztJQUdLLE1BQU0sQ0FBQyxXQUFvQjs7UUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNKOzs7Ozs7SUFHSyxVQUFVLENBQUMsR0FBRztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7SUFHYixVQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzs7OztZQTFGdkIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbi8vaW1wb3J0IHsgSUdsb2JhbHMgfSBmcm9tICcuL0lHbG9iYWwuaW50ZXJmYWNlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmcgO1xyXG4gIHByaXZhdGUgYmFzZVVybDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODEvXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHAgOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvY3VyYW50Q29udGV4dCgpOiBhbnkge1xyXG4gICAvL3RoaXMuYmFzZVVybCA9IHRoaXMuZ2xvYmFsQ29uZmlnLmJhc2VBcGlVcmxfUHJvY3VyYW50O1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dCgpO1xyXG4gIH07XHJcblxyXG4gIGdldENvbnRleHQoKSB7XHJcbiAgICBsZXQgY29udGV4dCA9IHtcclxuICAgICAgdXJsOiB0aGlzLnVybC5iaW5kKHRoaXMpLFxyXG4gICAgICBhZGRQYXJhbTogdGhpcy5hZGRQYXJhbS5iaW5kKHRoaXMpLFxyXG4gICAgICBnZXQ6IHRoaXMuZ2V0LmJpbmQodGhpcyksXHJcbiAgICAgIHBvc3Q6IHRoaXMucG9zdC5iaW5kKHRoaXMpLFxyXG4gICAgICBwdXQ6IHRoaXMucHV0LmJpbmQodGhpcyksXHJcbiAgICAgIGRlbGV0ZTogdGhpcy5kZWxldGUuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUhlYWRlcihjb250ZW50VHlwZT86IHN0cmluZykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlIDogJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cmwodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3VybCA9IHRoaXMuYmFzZVVybCArIHVybDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWRkUGFyYW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBIdHRwU2VydmljZSB7XHJcbiAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLl91cmwuaW5kZXhPZihcIj9cIikgPj0gMClcclxuICAgICAgICB0aGlzLl91cmwgKz0gXCImXCIgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5fdXJsICs9IFwiP1wiICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQoY29udGVudFR5cGU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVIZWFkZXIoY29udGVudFR5cGUpO1xyXG4gICAgaWYgKHRoaXMuX3VybCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9zdChkYXRhLCBjb250ZW50VHlwZT86IHN0cmluZykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZUhlYWRlcihjb250ZW50VHlwZSk7XHJcbiAgICBpZiAodGhpcy5fdXJsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHV0KGRhdGEsIGNvbnRlbnRUeXBlPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlSGVhZGVyKGNvbnRlbnRUeXBlKTtcclxuICAgIGlmICh0aGlzLl91cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCwgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGV0ZShjb250ZW50VHlwZT86IHN0cmluZykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZUhlYWRlcihjb250ZW50VHlwZSk7XHJcbiAgICBpZiAodGhpcy5fdXJsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLl91cmwsIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRCYXNlVXJsKHVybCkge1xyXG4gICAgdGhpcy5iYXNlVXJsID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCYXNlVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcclxuICB9XHJcblxyXG59Il19