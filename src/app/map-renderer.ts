import * as Leaflet from 'leaflet';
import {SpotDto} from './dto/spot.dto';

export class MapRenderer {

    private map: any;

    private renderedSpots = [];

    constructor(mapElementId) {
        this.map = new Leaflet.map(mapElementId).setView([0, 0], 1);

        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    moveTo(lat: number, lon: number, zoom: number) {
        this.map.setView([lat, lon], zoom);
    }

    renderSpots(spots: Array<SpotDto>) {

        this.removeAllSpots();

        for (const spot of spots) {

            Leaflet.marker([spot.lat, spot.lon]).addTo(this.map)
                .bindPopup(spot.title)
                .openPopup();
        }
    }

    removeAllSpots() {
        for (const spot of this.renderedSpots) {
            spot.removeFrom(this.map);
        }
    }
}