import { Component, OnInit } from '@angular/core';
import * as mapboxGl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var map = new mapboxGl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-33.4676231, 70.6647733],
      zoom: 2
    });
  }

}
