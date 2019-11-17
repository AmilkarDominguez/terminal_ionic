import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstitucionalService {

  constructor( private http: HttpClient ) { }

  getInstitucional(){
    return this.http.get('http://192.168.0.93:8000/api/institucional');
  }
}
