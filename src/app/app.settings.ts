import { Injectable } from '@angular/core';

@Injectable()
export class settings {
    BaseUrlIceScrum: string = 'https://www.icescrum.com/a/ws/p/GDA/';
    
    private _projetActif: string;
    get projetActif(): string {
        return this._projetActif;
    }
    set projetActif(value:string) {
        this._projetActif = value;
    }
}