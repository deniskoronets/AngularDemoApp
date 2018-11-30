import {Component, OnInit} from '@angular/core';
import {MapRendererService} from '../../../services/map-renderer.service';

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

    constructor(
        private mapRendererService: MapRendererService
    ) {
    }

    ngOnInit() {
        this.mapRendererService.initMap('map');
    }
}
