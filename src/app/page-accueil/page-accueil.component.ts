import { Component, OnInit } from '@angular/core';
import { settings } from "app/app.settings";

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {

  constructor(private settings: settings) { }

  ngOnInit() {
  }

}
