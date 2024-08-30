import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Map, Marker } from 'mapbox-gl';
@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  @Input() lngLat?: [number, number];

  ngAfterViewInit() {
    if (!this.divMap) throw 'Map Div not found';
    if (!this.lngLat) throw "LngLat variable can't be null";
    // map
    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    //marker
    new Marker().setLngLat(this.lngLat).addTo(map);
  }
}
