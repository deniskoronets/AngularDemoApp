import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../user';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: []
})
export class LogoutComponent implements OnInit {

    constructor(
        private router: Router,
        private user: User
    ) { }

    ngOnInit() {
        this.user.logout();
        this.router.navigate(['']);
    }
}
