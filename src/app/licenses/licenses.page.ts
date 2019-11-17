import { Component, OnInit } from '@angular/core';
import { LicenciasService } from '../services/licencias.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.page.html',
  styleUrls: ['./licenses.page.scss'],
})
export class LicensesPage implements OnInit {

  licencias : Observable<any>;

  constructor( private licenciasService:LicenciasService ) { }

  ngOnInit() {
    this.licencias = this.licenciasService.getLicencias();
  }

}
