import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

@Injectable({
    providedIn: 'root'
})
export class SpotsService extends BaseService {

    constructor(
        protected http: HttpClient,
        protected user: User
    ) {
        super(http, user);
    }

    getSpots(mapId: number) {
        return this.request('get', 'maps/' + mapId + '/spots');
    }

    getSpot(mapId: number, spotId: number) {
        return this.request('get', 'maps/' + mapId + '/spots/' + spotId);
    }
}
