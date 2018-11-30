import { Component } from '@angular/core';
import {User} from '../../../user';

@Component({
  selector: 'app-layouts-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent {

  public user: User;

  constructor(user: User) {
    this.user = user;
  }
}
