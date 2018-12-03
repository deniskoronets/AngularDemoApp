import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {}

    public logError(error: any) {
        // @todo: implement logging into 3rd party service
        console.error(error);
    }

    public handleError(error: any) {

        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            switch (error.status) {
                case 401:
                    router.navigate(['/login']);
                    return;

                case 403:
                    router.navigate(['/403']);
                    return;

                case 404:
                    router.navigate(['/404']);
                    return;
            }
        }

        this.logError(error);

        router.navigate(['/error']);
    }
}