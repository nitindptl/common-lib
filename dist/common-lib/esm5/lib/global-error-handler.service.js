/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
var GlobalErrorHandlerService = /** @class */ (function () {
    function GlobalErrorHandlerService(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    GlobalErrorHandlerService.prototype.handleError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        /** @type {?} */
        var router = this.injector.get(Router);
        console.log('URL: ' + router.url);
        if (error instanceof HttpErrorResponse) {
            //Backend returns unsuccessful response codes such as 404, 500 etc.
            console.error('Backend returned status code: ', error.status);
            console.error('Response body:', error.message);
        }
        else {
            //A client-side or network error occurred.
            console.error('An error occurred:', error.message);
        }
        router.navigate(['/error']);
    };
    GlobalErrorHandlerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalErrorHandlerService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return GlobalErrorHandlerService;
}());
export { GlobalErrorHandlerService };
if (false) {
    /** @type {?} */
    GlobalErrorHandlerService.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1saWIvIiwic291cmNlcyI6WyJsaWIvZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFJckMsbUNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7S0FBSzs7Ozs7SUFFM0MsK0NBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7O1FBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLEtBQUssWUFBWSxpQkFBaUIsRUFBRTs7WUFFcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQ7YUFBTTs7WUFFSCxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RDtRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzdCOztnQkFqQkosVUFBVTs7OztnQkFKd0IsUUFBUTs7b0NBQTNDOztTQUthLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxFcnJvckhhbmRsZXJTZXJ2aWNlIGltcGxlbWVudHMgRXJyb3JIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7IH0gICAgXHJcblxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICBsZXQgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuICAgICAgY29uc29sZS5sb2coJ1VSTDogJyArIHJvdXRlci51cmwpO1xyXG4gICAgICBcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vQmFja2VuZCByZXR1cm5zIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlcyBzdWNoIGFzIDQwNCwgNTAwIGV0Yy5cdFx0XHRcdCAgXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdCYWNrZW5kIHJldHVybmVkIHN0YXR1cyBjb2RlOiAnLCBlcnJvci5zdGF0dXMpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9uc2UgYm9keTonLCBlcnJvci5tZXNzYWdlKTsgICAgICAgICAgXHQgIFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9BIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuXHQgICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5tZXNzYWdlKTsgICAgICAgICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgICByb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9XHJcbn0gIl19