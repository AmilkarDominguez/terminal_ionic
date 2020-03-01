import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor( 
    private env: EnvService,
    private http: HttpClient 
  ) { }

  getServicios(){
    return this.http.get(this.env.API_URL + 'servicios');
  }
}
