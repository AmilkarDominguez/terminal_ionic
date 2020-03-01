import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { Travel } from '../models/travel';

@Injectable({
  providedIn: 'root'
})
export class MonitoreosService {

  constructor(
    private env: EnvService,
    private http: HttpClient
  ) { }


  trackingTravel(code: string) {
    return this.http.post(
      this.env.API_URL + 'tracking_travel',
      {
        code: code
      }
    );
  }

  trackingTravel2(code: string){
    return this.http.post<Travel>(
      this.env.API_URL + 'tracking_travel',
      {
        code: code
      }
    ).pipe(travel => {
      return travel;
    });
  }
}
