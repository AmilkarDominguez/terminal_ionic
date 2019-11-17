import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  constructor( private http: HttpClient ) { }

  getBuses(){
    return this.http.get('http://192.168.0.93:8000/api/buses');
  }
}
