import { Injectable } from '@angular/core';
import {MapRenderer} from '../map-renderer';

@Injectable({
  providedIn: 'root'
})
export class MapRendererService {

  private _map: MapRenderer;

  constructor() { }

  initMap(containerId) {
      this._map = new MapRenderer(containerId);
  }

  get map() {
    return this._map;
  }
}
