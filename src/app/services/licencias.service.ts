import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenciasService {

  constructor( private http: HttpClient ) { }

  getLicencias(){
    return this.http.get('http://localhost:8000/api/licencias');
  }
}
