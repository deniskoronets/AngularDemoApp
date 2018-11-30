import {Component, OnInit} from '@angular/core';
import {SpotsService} from '../../../../services/spots.service';
import {ActivatedRoute} from '@angular/router';
import {SpotDto} from '../../../../dto/spot.dto';

@Component({
    selector: 'app-spot',
    templateUrl: './spot.component.html',
    styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

    public loading = true;

    public spot: SpotDto;

    constructor(
        private spotsService: SpotsService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {

        let spotId = null;
        this.route.params.subscribe(params => spotId = params['spotId']);

        this.spotsService.getSpot(spotId).subscribe({

        });
    }
}