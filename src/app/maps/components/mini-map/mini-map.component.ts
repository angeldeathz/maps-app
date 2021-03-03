import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxGl from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @Input() latLong: [number, number] = [0, 0];
  @ViewChild("map") divMapa!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    var map = new mapboxGl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.latLong,
      zoom: 13,
      interactive: false
    });

    new mapboxGl.Marker()
    .setLngLat(this.latLong)
    .addTo(map);
  }
}
