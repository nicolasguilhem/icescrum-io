import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { settings } from "./app.settings";


@Injectable()
export class IceScrumDAOService {

  constructor(private http: Http, private settings: settings) { }

  getBaseUri():string {
    return this.settings.baseUrlIceScrum;
  }

  testConnexion() {
    let headers = new Headers();
    headers.append("Authorization","Basic "+btoa(this.settings.loginIceScrum+":"+this.settings.passwdIceScrum));
    this.http.get(this.settings.baseUrlIceScrum+'/release', headers)
    .subscribe((reponse) => console.log(reponse.json()));
  }
}
