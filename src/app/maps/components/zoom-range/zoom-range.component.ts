import { AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import * as mapboxGl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild("map") divMapa!: ElementRef;
  private map: mapboxGl.Map;
  public zoomLevel: number = 3;
  center: [number, number] = [-33.4676231, 70.6647733];

  constructor() { }

  ngOnDestroy(): void {
    this.map.off("zoom", () => {});
    this.map.off("zoomend", () => {});
    this.map.off("move", () => {});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxGl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.map.on("zoom", (e) => {
      if (this.map.getZoom() <= 18) {
        this.zoomLevel = this.map.getZoom();
      }
    });

    this.map.on("zoomend", (e) => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    });

    this.map.on("move", (e) => {
      this.center = [e.target.getCenter().lat, e.target.getCenter().lng];
      // console.log(this.center);
    });
  }

  public zoomIn() {
    this.map.zoomIn();
  }

  public zoomOut() {
    this.map.zoomOut();
  }

  public zoomChanged(value: number) {
    this.map.zoomTo(value);
  }
}
