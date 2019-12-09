import { Component, OnInit, HostBinding } from '@angular/core';
import {BikesService} from '../../services/bikes.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  bikes: any = [];

  constructor(private bikeService: BikesService) { }

  ngOnInit() {
    this.getBikes();    
  }

  getBikes(){
    this.bikeService.getBikes().subscribe(
      res =>{
        this.bikes = res;
      },
      err => console.error(err)
    );
  }

  deleteBike(id: string){
    this.bikeService.deleteBike(id).subscribe(
      res => {
        console.log(res);
        this.getBikes();
      },
      err => console.log(err)
    )
  } 

}
