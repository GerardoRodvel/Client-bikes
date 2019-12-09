import { Component, OnInit, HostBinding } from '@angular/core';
import { Bike } from 'src/app/models/Bike';
import {BikesService} from 'src/app/services/bikes.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  bike: Bike = {
    id: 0,
    marca: '',
    rodada: '',
    precio: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private bikeService: BikesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    if (params.id) {
        this.bikeService.getBike(params.id).subscribe(
          res => {
            console.log(res);
            this.bike = res;
            this.edit = true;
          },
          err =>
            console.log(err)
        ); 
      }

  }
/* guardar bike */
  saveNewBike() {
    delete this.bike.id;
    delete this.bike.created_at;

    this.bikeService.saveBike(this.bike).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/bikes']);
      },
      err => console.error(err)
    );
  }

/* actualizar bike */
 updateBike() {
    delete this.bike.created_at;

    this.bikeService.updateBike(this.bike.id, this.bike).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/bikes']);
      },
      err => console.log(err)
    );
  }


}
