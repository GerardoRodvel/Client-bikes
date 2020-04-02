import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike } from '../models/Bike';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

   API_URI = 'http://3.83.143.230:3000/api'; 
    /*API_URI = 'http://157.245.189.89:3000/api';*/
  constructor(private http: HttpClient) { }

  getBikes() {
  return this.http.get(`${this.API_URI}/bikes`);
  }

  getBike(id: string) {
    return this.http.get(`${this.API_URI}/bikes/${id}`);
  }

  deleteBike(id: string) {
    return this.http.delete(`${this.API_URI}/bikes/${id}`);
  }

  saveBike(bike: Bike) {
    return this.http.post(`${this.API_URI}/bikes`, bike);
  }

  updateBike(id: string|number, updatedBike: Bike): Observable<Bike> {
    return this.http.put(`${this.API_URI}/bikes/${id}`, updatedBike);
  }
}

