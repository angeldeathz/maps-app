import { Injectable } from '@angular/core';
import * as mapboxGl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  public initMap() {
    var map = new mapboxGl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-33.4676231, 70.6647733],
      zoom: 2
    });
  }

}
