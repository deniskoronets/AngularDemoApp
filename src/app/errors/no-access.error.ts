import {HttpErrorResponse} from '@angular/common/http';

export class NoAccessError extends HttpErrorResponse {
    constructor() {
        super({
            error: 'You have no access to this page SHUY',
            status: 403,
            statusText: 'Access Denided',
        });
    }
}