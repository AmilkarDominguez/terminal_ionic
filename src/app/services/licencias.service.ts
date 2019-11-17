import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenciasService {

  constructor( private http: HttpClient ) { }

  getLicencias(){
    return this.http.get('http://192.168.0.93:8000/api/licencias');
  }
}
