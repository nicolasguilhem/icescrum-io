import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AppRoutes } from "app/app-routes";
import { settings } from "app/app.settings";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,
              private settings: settings) { }

  ngOnInit() {
  }

  goToPage(page: string) {
    
    if (AppRoutes.find((route) => route.path == page)) {
      this.router.navigate([page]);
    } else  {
      this.router.navigate([""]);
    }
  }
}
