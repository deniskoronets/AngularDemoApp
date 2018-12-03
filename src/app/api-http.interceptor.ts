import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from './api-response';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

    readonly BASE_API_URL = 'http://localhost:4200/api/v2/';

    constructor(
        private user: User
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<ApiResponse>> {

        let token = this.user.isAuthenticated() ? this.user.getToken() : '';

        request = request.clone<ApiResponse>({
            url: (request.url.indexOf('http') !== 0 ? this.BASE_API_URL : '') + request.url,
            setHeaders: {
                'X-AUTH-TOKEN': token,
            }
        });

        return next.handle(request);
    }
}