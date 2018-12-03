import { Injectable } from '@angular/core';
import {User} from '../user';
import {FormGroup} from '@angular/forms';
import {ApiResponse} from '../api-response';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private user: User
    ) {}

    public authenticate(form: FormGroup) {

        return new Promise((resolve, reject) => {

            this.http.get('authentication', {
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
