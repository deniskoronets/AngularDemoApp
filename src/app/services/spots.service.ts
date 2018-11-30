import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {FormGroup} from '@angular/forms';

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

    getSpot(spotId: number) {
        return this.request('get', 'spots/' + spotId);
    }

    getSpotComments(spotId: number) {
        return this.request('get', 'spots/' + spotId + '/comments');
    }

    updateSpot(spotId: number, spotForm: FormGroup) {
        return this.request('patch', 'spots/' + spotId, spotForm.value);
    }
}
