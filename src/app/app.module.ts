import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { IceScrumDAOService } from "app/ice-scrum-dao.service";
import { settings } from "app/app.settings";
import { ProjetComponent } from './projet/projet.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutes } from "./app-routes";
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConfigComponent } from './page-config/page-config.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { ConfigPropertyDirective } from './config-property.directive';
import { BaseUrlIceScrumComponent } from './base-url-ice-scrum/base-url-ice-scrum.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    MenuComponent,
    PageAccueilComponent,
    PageConfigComponent,
    PageServicesComponent,
    ConfigPropertyDirective,
    BaseUrlIceScrumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    IceScrumDAOService,
    settings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
