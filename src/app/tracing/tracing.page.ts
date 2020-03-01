import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MonitoreosService } from '../services/monitoreos.service';
import { Observable } from 'rxjs';
import { EnvService } from '../services/env.service';
import { Travel } from '../models/travel';

declare var google;

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.page.html',
  styleUrls: ['./tracing.page.scss'],
})


export class TracingPage implements OnInit, AfterViewInit {
  @ViewChild('mapElement', { static: true }) mapNativeElement: ElementRef;



  travel: Travel;
  code:string;
  latitud_:number =  -21.583159500000004;
  longitud_:number = -63.958611100000006;

  url:string = "https://www.google.com/maps/dir//-21.5262952,-64.7290933/@-21.5243256,-64.7334476,15z/data=!4m2!4m1!3e0";

  result : Observable<any>;

  constructor(
    private monitoreosService:MonitoreosService,
    public env: EnvService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      center: { lat: this.latitud_, lng: this.longitud_},
      zoom: 15
    });
    const goldenGatePosition = { lat: this.latitud_, lng: this.longitud_ };
    const marker = new google.maps.Marker({
      position: goldenGatePosition,
      map: map,
      title: 'Golden Gate Bridge'
    });
  }

  rawMap(){
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      center: { lat: this.latitud_, lng: this.longitud_},
      zoom: 15
    });
    const goldenGatePosition = { lat: this.latitud_, lng: this.longitud_ };
    const marker = new google.maps.Marker({
      position: goldenGatePosition,
      map: map,
      title: 'Golden Gate Bridge'
    });
  }


  findTravel(){
    
    console.log(this.code);

    // this.result = this.monitoreosService.trackingTravel(this.code);
    
    this.monitoreosService.trackingTravel2(this.code).subscribe(
      travel => {
        this.travel = travel;
      }
    );
    if(this.travel!){
     
      console.log('llegando');
      console.log(this.travel);
      this.latitud_ = this.travel.latitud;
      this.longitud_ = this.travel.longitud;

      this.url = "https://www.google.com/maps/dir//"+this.latitud_+","+this.longitud_+"/@"+this.latitud_+","+this.longitud_+",15z/data=!4m2!4m1!3e0";
      this.rawMap();
    }
  }

  openGoogle(){
    window.open(this.url, '_system');
  }
}


