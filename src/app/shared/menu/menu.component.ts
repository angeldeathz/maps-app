import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor() { }

  menus: MenuItem[] = [
    {
      route: "/maps/fullscreen",
      name: "Fullscreen"
    },
    {
      route: "/maps/zoomrange",
      name: "Zoom Range"
    },
    {
      route: "/maps/marks",
      name: "Marks"
    },
    {
      route: "/maps/properties",
      name: "Properties"
    },
  ];

}
