/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:8081/";
    }
    Object.defineProperty(HttpService.prototype, "procurantContext", {
        get: /**
         * @return {?}
         */
        function () {
            //this.baseUrl = this.globalConfig.baseApiUrl_Procurant;
            return this.getContext();
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return {?}
     */
    HttpService.prototype.getContext = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var context = {
            url: this.url.bind(this),
            addParam: this.addParam.bind(this),
            get: this.get.bind(this),
            post: this.post.bind(this),
            put: this.put.bind(this),
            delete: this.delete.bind(this)
        };
        return context;
    };
    /**
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.createHeader = /**
     * @param {?=} contentType
     * @return {?}
     */
    function (contentType) {
        /** @type {?} */
        var headers = new HttpHeaders();
        headers.append('Content-Type', contentType ? contentType : 'application/json');
        return headers;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    HttpService.prototype.url = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this._url = this.baseUrl + url;
        return this;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HttpService.prototype.addParam = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (value != undefined) {
            if (this._url.indexOf("?") >= 0)
                this._url += "&" + key + "=" + value;
            else
                this._url += "?" + key + "=" + value;
        }
        return this;
    };
    /**
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.get = /**
     * @param {?=} contentType
     * @return {?}
     */
    function (contentType) {
        /** @type {?} */
        var headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.get(this._url, {
                headers: headers
            });
        }
    };
    /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.post = /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    function (data, contentType) {
        /** @type {?} */
        var headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.post(this._url, data, {
                headers: headers
            });
        }
    };
    /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.put = /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    function (data, contentType) {
        /** @type {?} */
        var headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.put(this._url, data, {
                headers: headers
            });
        }
    };
    /**
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.delete = /**
     * @param {?=} contentType
     * @return {?}
     */
    function (contentType) {
        /** @type {?} */
        var headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.delete(this._url, {
                headers: headers
            });
        }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    HttpService.prototype.setBaseUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.baseUrl = url;
    };
    /**
     * @return {?}
     */
    HttpService.prototype.getBaseUrl = /**
     * @return {?}
     */
    function () {
        return this.baseUrl;
    };
    HttpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpService.ngInjectableDef = i0.defineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.inject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());
export { HttpService };
if (false) {
    /** @type {?} */
    HttpService.prototype._url;
    /** @type {?} */
    HttpService.prototype.baseUrl;
    /** @type {?} */
    HttpService.prototype._http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lBYTdELHFCQUFvQixLQUFrQjtRQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO3VCQUZaLHdCQUF3QjtLQUdqRDtJQUVELHNCQUFJLHlDQUFnQjs7OztRQUFwQjs7WUFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMxQjs7O09BQUE7SUFBQSxDQUFDOzs7O0lBRUYsZ0NBQVU7OztJQUFWOztRQUNFLElBQUksT0FBTyxHQUFHO1lBQ1osR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2xDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDL0IsQ0FBQTtRQUNELE9BQU8sT0FBTyxDQUFDO0tBQ2hCOzs7OztJQUVPLGtDQUFZOzs7O2NBQUMsV0FBb0I7O1FBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDL0UsT0FBTyxPQUFPLENBQUM7Ozs7OztJQUdULHlCQUFHOzs7O2NBQUMsR0FBVztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDOzs7Ozs7O0lBSU4sOEJBQVE7Ozs7O2NBQUMsR0FBVyxFQUFFLEtBQXNCO1FBQ2xELElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDOztnQkFFckMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQzs7Ozs7O0lBR04seUJBQUc7Ozs7Y0FBQyxXQUFvQjs7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQy9CLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNKOzs7Ozs7O0lBR0ssMEJBQUk7Ozs7O2NBQUMsSUFBSSxFQUFFLFdBQW9COztRQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7Z0JBQ3RDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNKOzs7Ozs7O0lBR0sseUJBQUc7Ozs7O2NBQUMsSUFBSSxFQUFFLFdBQW9COztRQUNwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7Z0JBQ3JDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNKOzs7Ozs7SUFHSyw0QkFBTTs7OztjQUFDLFdBQW9COztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDbEMsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1NBQ0o7Ozs7OztJQUdLLGdDQUFVOzs7O2NBQUMsR0FBRztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7SUFHYixnQ0FBVTs7OztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7OztnQkExRnZCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsVUFBVTs7O3NCQURuQjs7U0FVYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSxJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuLy9pbXBvcnQgeyBJR2xvYmFscyB9IGZyb20gJy4vSUdsb2JhbC5pbnRlcmZhY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuICBwcml2YXRlIF91cmw6IHN0cmluZyA7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cCA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcblxyXG4gIGdldCBwcm9jdXJhbnRDb250ZXh0KCk6IGFueSB7XHJcbiAgIC8vdGhpcy5iYXNlVXJsID0gdGhpcy5nbG9iYWxDb25maWcuYmFzZUFwaVVybF9Qcm9jdXJhbnQ7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KCk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0Q29udGV4dCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0ge1xyXG4gICAgICB1cmw6IHRoaXMudXJsLmJpbmQodGhpcyksXHJcbiAgICAgIGFkZFBhcmFtOiB0aGlzLmFkZFBhcmFtLmJpbmQodGhpcyksXHJcbiAgICAgIGdldDogdGhpcy5nZXQuYmluZCh0aGlzKSxcclxuICAgICAgcG9zdDogdGhpcy5wb3N0LmJpbmQodGhpcyksXHJcbiAgICAgIHB1dDogdGhpcy5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgZGVsZXRlOiB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGV4dDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSGVhZGVyKGNvbnRlbnRUeXBlPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlID8gY29udGVudFR5cGUgOiAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVybCh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdXJsID0gdGhpcy5iYXNlVXJsICsgdXJsO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhZGRQYXJhbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcik6IEh0dHBTZXJ2aWNlIHtcclxuICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMuX3VybC5pbmRleE9mKFwiP1wiKSA+PSAwKVxyXG4gICAgICAgIHRoaXMuX3VybCArPSBcIiZcIiArIGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLl91cmwgKz0gXCI/XCIgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldChjb250ZW50VHlwZT86IHN0cmluZykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZUhlYWRlcihjb250ZW50VHlwZSk7XHJcbiAgICBpZiAodGhpcy5fdXJsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwsIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb3N0KGRhdGEsIGNvbnRlbnRUeXBlPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlSGVhZGVyKGNvbnRlbnRUeXBlKTtcclxuICAgIGlmICh0aGlzLl91cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdXQoZGF0YSwgY29udGVudFR5cGU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVIZWFkZXIoY29udGVudFR5cGUpO1xyXG4gICAgaWYgKHRoaXMuX3VybCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5fdXJsLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlKGNvbnRlbnRUeXBlPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlSGVhZGVyKGNvbnRlbnRUeXBlKTtcclxuICAgIGlmICh0aGlzLl91cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJhc2VVcmwodXJsKSB7XHJcbiAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJhc2VVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xyXG4gIH1cclxuXHJcbn0iXX0=