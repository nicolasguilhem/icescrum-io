import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-passwd-ice-scrum',
  templateUrl: './passwd-ice-scrum.component.html',
  styleUrls: ['./passwd-ice-scrum.component.css']
})
export class PasswdIceScrumComponent implements OnInit {
  
  @Output()
  passwdIceScrumChange: EventEmitter<string> = new EventEmitter<string>();

  private _passwdIceScrum: string;

  @Input()
  get passwdIceScrum(): string {
    return this._passwdIceScrum;
  }

  set passwdIceScrum(value: string) {
    this._passwdIceScrum = value;
    this.passwdIceScrumChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }
}
