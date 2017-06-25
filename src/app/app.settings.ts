import { Injectable } from '@angular/core';

@Injectable()
export class settings {
    private _baseUrlIceScrum: string = 'https://www.icescrum.com/a/ws/p/GDA/';
    get baseUrlIceScrum(): string {
        return this._baseUrlIceScrum;
    }
    set baseUrlIceScrum(value:string) {
        this._baseUrlIceScrum = value;
    }

    private _projetActif: string = 'GDA';
    get projetActif(): string {
        return this._projetActif;
    }
    set projetActif(value:string) {
        this._projetActif = value;
    }
}