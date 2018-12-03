import { Component, OnInit } from '@angular/core';
import {SpotDto} from '../../../../dto/spot.dto';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpotsService} from '../../../../services/spots.service';
import {User} from '../../../../user';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiResponse} from '../../../../api-response';
import {NoAccessError} from '../../../../errors/no-access.error';
import {MapDto} from '../../../../dto/map.dto';
import {MapsService} from '../../../../services/maps.service';

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.scss']
})
export class EditMapComponent implements OnInit {

    public mapId: number;

    public map: MapDto;

    private loading = true;

    public mapForm: FormGroup = new FormGroup({
        title: new FormControl('', [
            Validators.required,
        ]),
        description: new FormControl('', [
            Validators.required,
        ]),
    });

    constructor(
        private mapsService: MapsService,
        private user: User,
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            this.mapId = params['id'];
        });

        this.mapsService.getMap(this.mapId).subscribe((response: ApiResponse) => {
            this.map = ApiResponse.cast(response.data, MapDto);

            if (this.map.user.id !== this.user.id) {
                throw new NoAccessError();
            }

            this.mapForm.controls['title'].setValue(this.map.title);
            this.mapForm.controls['description'].setValue(this.map.description);

            this.loading = false;
        });
    }

    onSubmit() {
        this.mapsService.updateMap(this.map.id, this.mapForm).subscribe(() => {
            this.router.navigate(['/map/' + this.mapId]);
        });
    }

}