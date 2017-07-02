import { Component } from '@angular/core';
import { settings } from "app/app.settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private settings: settings) {

  }
}
