import {Component, OnInit} from '@angular/core';
import {SpotsService} from '../../../../services/spots.service';
import {ActivatedRoute} from '@angular/router';
import {SpotDto} from '../../../../dto/spot.dto';
import {ApiResponse} from '../../../../api-response';
import {MapRendererService} from '../../../../services/map-renderer.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CommentDto} from '../../../../dto/comment.dto';

@Component({
    selector: 'app-spot',
    templateUrl: './spot.component.html',
    styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

    public loading = {
        spot: true,
        comments: true,
    };

    public spot: SpotDto;

    public comments: Array<CommentDto>;

    public mapId: number;

    public location = window.location.href;

    constructor(
        private spotsService: SpotsService,
        private route: ActivatedRoute,
        private mapRendererService: MapRendererService,
        private modalService: NgbModal
    ) {}

    share(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-share'});
    }

    centerSpot() {
        this.mapRendererService.map.moveTo(this.spot.lat, this.spot.lon, 12);
    }

    ngOnInit() {

        let spotId = null;

        this.route.parent.params.subscribe(params => {
            this.mapId = params['id'];
        });

        this.route.params.subscribe(params => {
            spotId = params['spotId'];
        });

        this.spotsService.getSpot(spotId).subscribe((response: ApiResponse) => {
            this.spot = ApiResponse.cast(response.data, SpotDto);
            this.mapRendererService.map.renderSpots([this.spot]);
            this.loading.spot = false;
        });

        this.spotsService.getSpotComments(spotId).subscribe((response: ApiResponse) => {
            this.comments = ApiResponse.castArray(response.data, CommentDto);
            this.loading.comments = false;
        });
    }
}