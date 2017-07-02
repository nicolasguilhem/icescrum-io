import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-base-url-ice-scrum',
  templateUrl: './base-url-ice-scrum.component.html',
  styleUrls: ['./base-url-ice-scrum.component.css']
})
export class BaseUrlIceScrumComponent implements OnInit {
  
  @Output()
  urlRestChange: EventEmitter<string> = new EventEmitter<string>();

  private _urlRest: string;

  @Input()
  get urlRest(): string {
    return this._urlRest;
  }

  set urlRest(value: string) {
    this._urlRest = value;
    this.urlRestChange.emit(value);
  }

  testUrl() {
    console.log("test de l'url");
  }

  constructor() { }

  ngOnInit() {
  }
}
