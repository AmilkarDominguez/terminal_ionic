import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.page.html',
  styleUrls: ['./tracing.page.scss'],
})


export class TracingPage implements OnInit, AfterViewInit {
  @ViewChild('mapElement', { static: true }) mapNativeElement: ElementRef;

  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      center: { lat: -21.583159500000004, lng: -63.958611100000006 },
      zoom: 15
    });
    
-63.95
    const goldenGatePosition = { lat: -21.583159500000004, lng: -63.958611100000006 };
    const marker = new google.maps.Marker({
      position: goldenGatePosition,
      map: map,
      title: 'Golden Gate Bridge'
    });
  }
}

