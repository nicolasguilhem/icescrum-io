import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  _libelle2: string;

  @Input()
  get libelle2(): string {
    return this._libelle2;
  }

  set libelle2(value: string) {
    this._libelle2 = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
