import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker} from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
  host: {'collision-id': 'markers-page'},
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentlbgLat: LngLat = new LngLat(
    -58.46422690799271,
    -34.62874254403942
  );

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El lemento HTML no fue encontrado';
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentlbgLat, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    // const markerHTML = document.createElement('div');
    // markerHTML.innerHTML = 'Holi Mundo!'

    // const marker = new Marker({
    //   //color: 'red'
    //   element: markerHTML
    // }).setLngLat(this.currentlbgLat)
    // .addTo( this.map );

  }
}
