import { Component } from '@angular/core';
import { settings } from "app/app.settings";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titrePage: string = 'Titre de la page';

  constructor(private settings: settings, private route: ActivatedRoute, private router: Router) {
    
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        this.titrePage = currentRoute.snapshot.data.name;
      });
  }
}
