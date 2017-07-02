import { Injectable } from '@angular/core';

@Injectable()
export class settings {
    private _baseUrlIceScrum: string = '';
    get baseUrlIceScrum(): string {
        return this._baseUrlIceScrum;
    }
    set baseUrlIceScrum(value:string) {
        this._baseUrlIceScrum = value;
    }

    private _loginIceScrum: string = '';
    get loginIceScrum(): string {
        return this._loginIceScrum;
    }
    set loginIceScrum(value:string) {
        this._loginIceScrum = value;
    }

    private _passwdIceScrum: string = '';
    get passwdIceScrum(): string {
        return this._passwdIceScrum;
    }
    set passwdIceScrum(value:string) {
        this._passwdIceScrum = value;
    }

    private _projetActif: string = '';
    get projetActif(): string {
        return this._projetActif;
    }
    set projetActif(value:string) {
        this._projetActif = value;
    }

    public afficherContexte():string {

        let contexte:string = "";

        if (this._projetActif) {
            contexte += this._projetActif;
        }

        if (this._baseUrlIceScrum) {
            contexte += ` (${this._baseUrlIceScrum})`;
        }

        return contexte;
    }
}