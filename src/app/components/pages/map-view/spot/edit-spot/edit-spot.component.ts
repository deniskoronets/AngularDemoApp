import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpotDto} from '../../../../../dto/spot.dto';
import {SpotsService} from '../../../../../services/spots.service';
import {User} from '../../../../../user';
import {ApiResponse} from '../../../../../api-response';
import {ActivatedRoute, Router} from '@angular/router';
import {NoAccessError} from '../../../../../errors/no-access.error';

@Component({
    selector: 'app-edit',
    templateUrl: './edit-spot.component.html',
    styleUrls: ['./edit-spot.component.scss']
})
export class EditSpotComponent implements OnInit {

    public mapId: number;

    public spot: SpotDto;

    private loading = true;

    public spotForm: FormGroup = new FormGroup({
        title: new FormControl('', [
            Validators.required,
        ]),
        description: new FormControl('', [
            Validators.required,
        ]),
        url: new FormControl('', [
            Validators.required,
        ]),
    });

    constructor(
        private spotsService: SpotsService,
        private user: User,
        private route: ActivatedRoute,
        private router: Router,
    ) {
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

            if (this.spot.user_id !== this.user.id) {
                throw new NoAccessError();
            }

            this.spotForm.controls['title'].setValue(this.spot.title);
            this.spotForm.controls['description'].setValue(this.spot.description);
            this.spotForm.controls['url'].setValue(this.spot.url);

            this.loading = false;
        });
    }

    onSubmit() {
        this.spotsService.updateSpot(this.spot.id, this.spotForm).subscribe(() => {
           this.router.navigate(['/map/' + this.mapId + '/spot/' + this.spot.id]);
        });
    }
}
