import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  constructor( 
    private env: EnvService,
    private http: HttpClient 
  ) { }

  getBuses(){
    return this.http.get(this.env.API_URL + 'buses');
  }
}
