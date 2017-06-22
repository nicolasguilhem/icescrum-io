import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  _libelle1: string;

  @Input()
  get libelle1(): string {
    return this._libelle1;
  }

  set libelle1(value: string) {
    this._libelle1 = value;
    this.libelle1Change.emit(value);
  }

  @Output()
  libelle1Change : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
