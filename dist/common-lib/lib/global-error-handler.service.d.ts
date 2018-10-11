import { ErrorHandler, Injector } from '@angular/core';
export declare class GlobalErrorHandlerService implements ErrorHandler {
    private injector;
    constructor(injector: Injector);
    handleError(error: any): void;
}
