import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

    constructor(
        protected http: HttpClient,
    ) {}

    getMaps() {
      return this.http.get('maps');
    }

    getMap(id: number) {
        return this.http.get('maps/' + id);
    }

    updateMap(id: number, mapForm: FormGroup) {
        return this.http.patch('maps/' + id, mapForm.value);
    }

    search(search: string) {
        return this.http.get('maps/search?q=' + encodeURIComponent(search));
    }
}
