/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
export class GlobalErrorHandlerService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        /** @type {?} */
        let router = this.injector.get(Router);
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
    }
}
GlobalErrorHandlerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalErrorHandlerService.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /** @type {?} */
    GlobalErrorHandlerService.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1saWIvIiwic291cmNlcyI6WyJsaWIvZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxNQUFNOzs7O0lBQ0YsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtLQUFLOzs7OztJQUUzQyxXQUFXLENBQUMsS0FBVTs7UUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFOztZQUVwQyxPQUFPLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRDthQUFNOztZQUVILE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDN0I7OztZQWpCSixVQUFVOzs7O1lBSndCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2xvYmFsRXJyb3JIYW5kbGVyU2VydmljZSBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcikgeyB9ICAgIFxyXG5cclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgbGV0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdVUkw6ICcgKyByb3V0ZXIudXJsKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAvL0JhY2tlbmQgcmV0dXJucyB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZXMgc3VjaCBhcyA0MDQsIDUwMCBldGMuXHRcdFx0XHQgIFxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignQmFja2VuZCByZXR1cm5lZCBzdGF0dXMgY29kZTogJywgZXJyb3Iuc3RhdHVzKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc3BvbnNlIGJvZHk6JywgZXJyb3IubWVzc2FnZSk7ICAgICAgICAgIFx0ICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLlx0ICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7ICAgICAgICAgIFxyXG4gICAgICB9ICAgICBcclxuICAgICAgcm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfVxyXG59ICJdfQ==