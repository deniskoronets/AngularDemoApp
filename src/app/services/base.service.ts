import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {ApiResponse} from '../api-response';
import {User} from '../user';
import {Observable} from 'rxjs';

export class BaseService {

    readonly BASE_API_URL = 'http://localhost:4200/api/v2/';

    constructor(
        protected http: HttpClient,
        protected user: User
    ) {}

    /**
     * Sending signed with bearer request to api
     */
    protected request(method: string, url: string, data: any = {}): Observable<ApiResponse> {

        if (url.indexOf('http') === -1) {
            url = this.BASE_API_URL + url;
        }

        return this.http.request<ApiResponse>(method, url, {
            body: data,
            headers: new HttpHeaders({
                'X-AUTH-TOKEN': this.user.getToken(),
            }),
        });
    }

    /**
     * Sending unsigned request (without token)
     */
    protected unsignedRequest(method: string, url: string, options?: {}): Observable<ApiResponse> {

        if (url.indexOf('http') === -1) {
            url = this.BASE_API_URL + url;
        }

        return this.http.request<ApiResponse>(method, url, options);
    }
}