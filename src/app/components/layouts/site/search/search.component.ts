import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {MapDto} from '../../../../dto/map.dto';
import {User} from '../../../../user';
import {MapsService} from '../../../../services/maps.service';
import {ApiResponse} from '../../../../api-response';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    readonly SEARCH_DELAY = 300;

    public search = '';

    public searchingNow = false;
    public displaySearchModal = false;

    public searchResults: {
        maps: Array<MapDto>,
    } = {
        maps: [],
    };

    private timeout = null;

    constructor(
        public user: User,
        private mapsService: MapsService,
        private eRef: ElementRef
    ) {
    }

    private doSearch() {

        this.displaySearchModal = true;
        this.searchingNow = true;

        this.mapsService.search(this.search).subscribe((response: ApiResponse) => {
            this.searchingNow = false;
            this.searchResults.maps = ApiResponse.castArray(response.data, MapDto);
        });
    }

    @HostListener('window:click', ['$event'])
    public outerClick(event) {

        if (this.eRef.nativeElement.contains(event.target)) {
            return;
        }

        this.search = '';
        this.displaySearchModal = false;
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
