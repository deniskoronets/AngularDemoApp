import { Component, OnInit } from '@angular/core';
import {User} from '../../../user';
import {MapsService} from '../../../services/maps.service';
import {ApiResponse} from '../../../api-response';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public maps : {id: string, title: string};

    constructor(
        public user: User,
        private mapsService: MapsService
    ) { }

    ngOnInit() {

        if (this.user.isAuthenticated()) {
            this.mapsService.getMaps().subscribe((data: ApiResponse) => {
                this.maps = data.data;
            });
        }
    }
}
