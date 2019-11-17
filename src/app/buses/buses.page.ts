import { Component, OnInit } from '@angular/core';
import { BusesService } from '../services/buses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.page.html',
  styleUrls: ['./buses.page.scss'],
})
export class BusesPage implements OnInit {

  buses : Observable<any>;

  constructor( private busesService:BusesService ) { }

  ngOnInit() {
    this.buses = this.busesService.getBuses();
  }

}
