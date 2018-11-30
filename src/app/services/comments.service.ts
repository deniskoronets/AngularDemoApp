import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends BaseService {

  constructor(
      protected http: HttpClient,
      protected user: User
  ) {
      super(http, user);
  }

  getComments(mapId: number) {
    return this.request('get', 'maps/' + mapId + '/comments');
  }
}
