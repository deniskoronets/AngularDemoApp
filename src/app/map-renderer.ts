import * as Leaflet from 'leaflet';
import {SpotDto} from './dto/spot.dto';

export class MapRenderer {

    private map: any;

    private renderedSpots = [];

    private onSpotSelectedCallback = (_spot: SpotDto) => {};

    constructor(mapElementId) {
        this.map = new Leaflet.map(mapElementId).setView([0, 0], 1);

        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    moveTo(lat: number, lon: number, zoom: number) {
        this.map.setView([lat, lon], zoom);
    }

    onSpotSelected(callback) {
        this.onSpotSelectedCallback = callback;
    }

    renderSpots(spots: Array<SpotDto>) {

        this.removeAll();

        for (const spot of spots) {

            let html = '<img src="' + spot.logo_picture + '">';

            if (!spot.logo_picture) {
                html = '<p>' + spot.title + '</p>';
            }

            let marker = Leaflet.marker([spot.lat, spot.lon], {
                icon: Leaflet.divIcon({
                    html: html,
                    iconSize: [80, 80],
                    className: 'map-spot'
                })
            }).addTo(this.map)
                .bindPopup(spot.title);

            marker.on('click', (e) => {
                this.renderedSpots.forEach((_marker) => {
                    _marker._icon.className = 'map-spot';
                });

                e.target._icon.className = 'map-spot active';

                ((_spot) => {
                    this.onSpotSelectedCallback(_spot);
                })(spot);
            });

            this.renderedSpots.push(marker);
        }
    }

    removeAll() {
        for (const spot of this.renderedSpots) {
            spot.removeFrom(this.map);
        }

        this.renderedSpots = [];
    }
}