import {Component, OnInit} from '@angular/core';
import {MapDto} from '../../../../dto/map.dto';
import {SpotDto} from '../../../../dto/spot.dto';
import {CommentDto} from '../../../../dto/comment.dto';
import {MapsService} from '../../../../services/maps.service';
import {SpotsService} from '../../../../services/spots.service';
import {CommentsService} from '../../../../services/comments.service';
import {ApiResponse} from '../../../../api-response';
import {MapRendererService} from '../../../../services/map-renderer.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../../user';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

    public map: MapDto;

    public spots: Array<SpotDto>;

    public comments: Array<CommentDto>;

    public selectedSpotId: number = 0;

    public loading = {
        map: true,
        spots: true,
        comments: true,
    };

    constructor(
        private route: ActivatedRoute,
        private mapService: MapsService,
        private spotsService: SpotsService,
        private commentsService: CommentsService,
        private mapRendererService: MapRendererService,
        public user: User
    ) {}

    ngOnInit() {
        let id = null;
        this.route.params.subscribe(params => id = params['id']);

        this.mapRendererService.map.onSpotSelected((spot: SpotDto) => {
            this.selectedSpotId = spot.id;
        });

        this.mapService.getMap(id).subscribe((response: ApiResponse) => {
            this.loading.map = false;
            this.map = ApiResponse.cast(response.data, MapDto);
        });

        this.spotsService.getSpots(id).subscribe((response: ApiResponse) => {
            this.loading.spots = false;
            this.spots = ApiResponse.castArray(response.data, SpotDto);

            this.mapRendererService.map.renderSpots(this.spots);
        });

        this.commentsService.getComments(id).subscribe((response: ApiResponse) => {
            this.loading.comments = false;
            this.comments = ApiResponse.castArray(response.data, CommentDto);
        });
    }
}
