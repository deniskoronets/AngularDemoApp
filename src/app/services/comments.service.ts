import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
      private http: HttpClient,
  ) {}

  getComments(mapId: number) {
    return this.http.get('maps/' + mapId + '/comments');
  }
}
