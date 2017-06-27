import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { settings } from "app/app.settings";
import { ConfigPropertyDirective } from "app/config-property.directive";
import { IceScrumDAOService } from "app/ice-scrum-dao.service";

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.css']
})
export class PageConfigComponent implements OnInit {

  constructor(private settings: settings,
              private iceScrumDAOService: IceScrumDAOService) { }

  ngOnInit() {
    this._codeProjet = this.settings.projetActif;
    this._urlRest = this.settings.baseUrlIceScrum;
  }

  _codeProjet: string;
  get codeProjet():string {
    return this._codeProjet;
  }
  set codeProjet(value: string) {
    this._codeProjet = value;
  }

  _urlRest: string;
  get urlRest():string {
    return this._urlRest;
  }
  set urlRest(value: string) {
    this._urlRest = value;
  }

  _loginIceScrum: string;
  get loginIceScrum():string {
    return this._loginIceScrum;
  }
  set loginIceScrum(value: string) {
    this._loginIceScrum = value;
  }

  _passwdIceScrum: string;
  get passwdIceScrum():string {
    return this._passwdIceScrum;
  }
  set passwdIceScrum(value: string) {
    this._passwdIceScrum = value;
  }

  @ViewChildren(ConfigPropertyDirective)
  lstConfigProperty: QueryList<ConfigPropertyDirective>;

  sauvegarderConfig() {
    this.lstConfigProperty.map((conf) => conf.sauvegarderConfig());
  }

  testConnxion() {
    this.iceScrumDAOService.testConnexion();
  }
}
