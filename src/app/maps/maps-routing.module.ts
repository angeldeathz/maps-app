import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './components/full-screen/full-screen.component';
import { ZoomRangeComponent } from './components/zoom-range/zoom-range.component';
import { MarksComponent } from './components/marks/marks.component';
import { PropertiesComponent } from './components/properties/properties.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "fullscreen",
        component: FullScreenComponent
      },
      {
        path: "zoomrange",
        component: ZoomRangeComponent
      },
      {
        path: "marks",
        component: MarksComponent
      },
      {
        path: "properties",
        component: PropertiesComponent
      },
      {
        path: "**",
        redirectTo: "fullscreen"
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
