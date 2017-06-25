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
  }

  _codeProjet: string;
  get codeProjet():string {
    return this._codeProjet;
  }

  set codeProjet(value: string) {
    this._codeProjet = value;
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
  }
}
