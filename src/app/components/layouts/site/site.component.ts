import {Component} from '@angular/core';
import {User} from '../../../user';
import {MapsService} from '../../../services/maps.service';
import {ApiResponse} from '../../../api-response';
import {MapDto} from '../../../dto/map.dto';

@Component({
    selector: 'app-layouts-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.scss'],
})
export class SiteComponent {

    readonly SEARCH_DELAY = 300;

    public search = '';

    public displaySearchModal = false;

    public searchResults: {
        maps: Array<MapDto>,
    } = {
        maps: [],
    };

    private timeout = null;

    constructor(
        public user: User,
        private mapsService: MapsService
    ) {}

    private doSearch() {
        this.mapsService.search(this.search).subscribe((response: ApiResponse) => {
            this.displaySearchModal = true;
            this.searchResults.maps = ApiResponse.castArray(response.data, MapDto);
        });
    }

    keyUpSearch() {

        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            this.doSearch();
        }, this.SEARCH_DELAY);
    }

    ngOnInit() {
    }
}