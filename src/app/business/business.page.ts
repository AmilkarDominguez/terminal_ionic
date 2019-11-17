import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  
  servicios : Observable<any>;

  constructor( private serviciosService:ServiciosService ) { }

  ngOnInit() {
    this.servicios = this.serviciosService.getServicios();
  }

}
