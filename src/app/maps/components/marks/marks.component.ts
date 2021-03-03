import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxGl from 'mapbox-gl';
import { MarkerColor } from '../../interfaces/marker-color';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements AfterViewInit, OnDestroy {

  @ViewChild("map") divMapa!: ElementRef;
  private map: mapboxGl.Map;
  public zoomLevel: number = 3;
  center: [number, number] = [-75, 45];
  markers: MarkerColor[] = [];

  constructor() { }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    this.map = new mapboxGl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.map.on("move", (e) => {
      this.center = [e.target.getCenter().lat, e.target.getCenter().lng];
      console.log(this.center);
    });
  }

  public goMarker(latlong: any) {
    this.map.flyTo({
      center: latlong,
      zoom: 14
    });
  }

  public addMarker () {

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const newMarker = new mapboxGl.Marker({
      draggable: true,
      color
    })
    .setLngLat([this.center[1], this.center[0]])
    .addTo(this.map);

    this.markers.push({
      marker: newMarker,
      color: color
    });
  }

  public deleteMarker(index: number) {
    this.markers[index].marker?.remove();
    this.markers.splice(index, 1);
  }
}
