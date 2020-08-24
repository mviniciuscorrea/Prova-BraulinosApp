import { Injectable } from '@angular/core';
import { _urlBase } from '../../conexaoService/urlbase';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginProvider {

  headersBase = new Headers();
  url = _urlBase + 'login/';

  constructor(public http: Http) {
    this.headersBase.append('Content-Type', 'application/json');
    this.headersBase.append('Accept', 'application/json');
  }

  login(usuario, senha) {
    this.headersBase.set('usuario', usuario);
    this.headersBase.set('senha', senha);

    return this.http.get(this.url, { headers: this.headersBase }).toPromise();
  }

  novoUsuario(dados) {
    let jsonObj = JSON.stringify(dados);
    return this.http.post(this.url, jsonObj, { headers: this.headersBase }).toPromise();

  }
}