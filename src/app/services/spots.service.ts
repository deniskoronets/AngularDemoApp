import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class SpotsService {

    constructor(
        protected http: HttpClient,
    ) {}

    getSpots(mapId: number) {
        return this.http.get('maps/' + mapId + '/spots');
    }

    getSpot(spotId: number) {
        return this.http.get('spots/' + spotId);
    }

    getSpotComments(spotId: number) {
        return this.http.get('spots/' + spotId + '/comments');
    }

    updateSpot(spotId: number, spotForm: FormGroup) {
        return this.http.patch('spots/' + spotId, spotForm.value);
    }
}
