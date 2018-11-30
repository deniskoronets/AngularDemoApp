import { Injectable } from '@angular/core';
import {User} from '../user';
import {FormGroup} from '@angular/forms';
import {BaseService} from './base.service';
import {ApiResponse} from '../api-response';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService {

    constructor(
        protected http: HttpClient,
        protected user: User
    ) {
        super(http, user);
    }

    public authenticate(form: FormGroup) {

        return new Promise((resolve, reject) => {

            this.unsignedRequest('GET', 'authentication', {
                headers: new HttpHeaders({
                    //Authorization: 'Basic ' + btoa(form.get('email').value + ':' + form.get('password').value),
                })
            }).subscribe((response: ApiResponse) => {
                this.user.authenticate(response.data.auth_token, response.data);
                resolve();

            }, (error: HttpErrorResponse) => {
                console.log(error, typeof error, error.status , error.message);
                reject();
            });
        });
    }
}
