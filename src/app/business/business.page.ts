import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Observable } from 'rxjs';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  
  servicios : Observable<any>;

  constructor(
     private serviciosService:ServiciosService,
     public env: EnvService
    ) { }

  ngOnInit() {
    this.servicios = this.serviciosService.getServicios();
  }

}
