import { Component, OnInit } from '@angular/core';
import * as mapboxGl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'maps-app';

  ngOnInit(): void {
    (mapboxGl as any).accessToken = environment.mapboxToken;
  }
}
