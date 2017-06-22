import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { settings } from "./app.settings";


@Injectable()
export class IceScrumDAOService {

  constructor(private http: Http, private settings: settings) { }

  getBaseUri():string {
    return this.settings.BaseUrlIceScrum;
  }
}
