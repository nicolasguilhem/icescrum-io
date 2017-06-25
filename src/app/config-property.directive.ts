import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appConfigProperty]'
})
export class ConfigPropertyDirective {

  @Input() appConfigProperty: string;
  @Input() appConfigValue: string;

  constructor() { }

}
