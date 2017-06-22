import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { IceScrumDAOService } from "app/ice-scrum-dao.service";
import { settings } from "app/app.settings";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    IceScrumDAOService,
    settings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
