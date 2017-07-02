import { Directive, Input } from '@angular/core';

import { settings } from "./app.settings"

@Directive({
  selector: '[appConfigProperty]'
})
export class ConfigPropertyDirective {

  @Input() appConfigProperty: string;
  @Input() appConfigValue: string;

  constructor(private settings: settings) { }

  sauvegarderConfig() {
    this.settings[this.appConfigProperty] = this.appConfigValue;
  }
}
