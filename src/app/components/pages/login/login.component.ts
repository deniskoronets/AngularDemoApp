import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl('', [
            Validators.required,
        ]),
    });

    /**
     * Indicates if form submit has failed
     */
    formFailed = false;

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onSubmit() {

        this.formFailed = false;

        this.auth.authenticate(this.loginForm).then(() => {
            this.router.navigate(['/']);

        }, () => {
            this.formFailed = true;
        });
    }
}