import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-login-ice-scrum',
  templateUrl: './login-ice-scrum.component.html',
  styleUrls: ['./login-ice-scrum.component.css']
})
export class LoginIceScrumComponent implements OnInit {

  @Output()
  loginIceScrumChange: EventEmitter<string> = new EventEmitter<string>();

  private _loginIceScrum: string;

  @Input()
  get loginIceScrum(): string {
    return this._loginIceScrum;
  }

  set loginIceScrum(value: string) {
    this._loginIceScrum = value;
    this.loginIceScrumChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }
}