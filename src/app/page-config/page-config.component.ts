import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { settings } from "app/app.settings";
import { ConfigPropertyDirective } from "app/config-property.directive";

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.css']
})
export class PageConfigComponent implements OnInit {

  constructor(private settings: settings) { }

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

  @ViewChildren(ConfigPropertyDirective)
  lstConfigProperty: QueryList<ConfigPropertyDirective>;

  sauvegarderConfig() {
    this.lstConfigProperty.map((conf) => this.enregistrerConf(conf));
  }

  enregistrerConf (conf: ConfigPropertyDirective) {

    if (conf.appConfigProperty == 'projetActif') {
      this.settings.projetActif = conf.appConfigValue;
    }

    if (conf.appConfigProperty == 'baseUrlIceScrum') {
      this.settings.baseUrlIceScrum = conf.appConfigValue;
    }
  }
}
