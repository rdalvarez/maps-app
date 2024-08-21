import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css',
  host: {'collision-id': 'zoom-range'},
})
export class ZoomRangePageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

   ngAfterViewInit(): void {
     if ( !this.divMap ) throw 'El lemento HTML no fue encontrado';
     const map = new Map({
       container: this.divMap.nativeElement, // container ID
       style: 'mapbox://styles/mapbox/streets-v12', // style URL
       center: [-74.5, 40], // starting position [lng, lat]
       zoom: 9, // starting zoom
     });
   }



 }

