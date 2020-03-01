import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class LicenciasService {

  constructor(
    private env: EnvService,
    private http: HttpClient 
  ) { }

  getLicencias(){
    return this.http.get(this.env.API_URL + 'licencias');
  }
}
