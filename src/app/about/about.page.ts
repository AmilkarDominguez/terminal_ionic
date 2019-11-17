import { Component, OnInit } from '@angular/core';
import { InstitucionalService } from '../services/institucional.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  institucional : Observable<any>;

  constructor( private institucionalService:InstitucionalService ) { }

  ngOnInit() {
    this.institucional = this.institucionalService.getInstitucional();
  }
}
