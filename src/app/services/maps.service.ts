import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

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
}
