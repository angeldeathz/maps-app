import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { FullScreenComponent } from './components/full-screen/full-screen.component';
import { MarksComponent } from './components/marks/marks.component';
import { ZoomRangeComponent } from './components/zoom-range/zoom-range.component';
import { PropertiesComponent } from './components/properties/properties.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    FullScreenComponent,
    MarksComponent,
    ZoomRangeComponent,
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
