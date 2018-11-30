import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
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