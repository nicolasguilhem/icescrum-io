import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdButtonModule, MdIconModule, MdToolbarModule, MdCardModule, MdInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { LoginIceScrumComponent } from './login-ice-scrum/login-ice-scrum.component';
import { PasswdIceScrumComponent } from './passwd-ice-scrum/passwd-ice-scrum.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    MenuComponent,
    PageAccueilComponent,
    PageConfigComponent,
    PageServicesComponent,
    ConfigPropertyDirective,
    BaseUrlIceScrumComponent,
    LoginIceScrumComponent,
    PasswdIceScrumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSidenavModule, MdButtonModule, FlexLayoutModule, MdIconModule, MdToolbarModule, MdCardModule, MdInputModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    IceScrumDAOService,
    settings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
