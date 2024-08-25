import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
  host: { 'collision-id': 'markers-page' },
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

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

  createMarker() {
    if (!this.map) return;

    //const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const color = `#${crypto
      .getRandomValues(new Uint32Array(1))[0]
      .toString(16)
      .padStart(8, '0')
      .slice(-6)}`;

    const lngLat = this.map.getCenter();

    this.AddMarker(lngLat, color);
  }

  AddMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({
      color: color,
      marker: marker,
    });
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);

    console.log(this.markers);

  }
}
