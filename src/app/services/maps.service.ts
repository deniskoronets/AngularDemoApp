import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MapsService extends BaseService {

    constructor(
        protected http: HttpClient,
        protected user: User
    ) {
      super(http, user);
    }

    getMaps() {
      return this.request('get', 'maps');
    }

    getMap(id: number) {
        return this.request('get', 'maps/' + id);
    }

    updateMap(id: number, mapForm: FormGroup) {
        return this.request('patch', 'maps/' + id, mapForm.value);

    }
}
