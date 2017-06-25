import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  
  @Output()
  codeProjetChange: EventEmitter<string> = new EventEmitter<string>();

  private _codeProjet: string;

  @Input()
  get codeProjet(): string {
    return this._codeProjet;
  }

  set codeProjet(value: string) {
    this._codeProjet = value;
    this.codeProjetChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }
}
