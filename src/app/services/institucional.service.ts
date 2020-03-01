import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class InstitucionalService {

  constructor( 
    private env: EnvService,
    private http: HttpClient 
  ) { }

  getInstitucional(){
    return this.http.get(this.env.API_URL + 'institucional');
  }
}
