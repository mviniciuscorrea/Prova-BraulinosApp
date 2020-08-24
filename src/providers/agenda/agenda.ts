import { Injectable } from '@angular/core';
import { _urlBase } from '../../conexaoService/urlbase';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AgendaProvider {

  headersBase = new Headers();
  url = _urlBase + 'agendas/';

  constructor(public http: Http) {
    this.headersBase.append('Content-Type', 'application/json');
    this.headersBase.append('Accept', 'application/json');
  }

  incluir(agendamento) {
    let jsonObj = JSON.stringify(agendamento);

    return this.http.post(this.url, jsonObj, { headers: this.headersBase }).toPromise();
  }

  buscar(realizado = null, dtInicial = '', dtFinal = '') {
    let usuario = window.localStorage.getItem("usuario");

    if (realizado != null) {
      this.headersBase.append('realizado', realizado == false ? 'false' : 'true');
    }

    if ((dtInicial != '') || (dtFinal != '')) {
      this.headersBase.delete('dtinicial');
      this.headersBase.delete('dtfinal');

      this.headersBase.append('dtinicial', dtInicial);
      this.headersBase.append('dtfinal', dtFinal);
    }

    return this.http.get(this.url + usuario, { headers: this.headersBase }).toPromise();
  }

  remarcar(agenda) {
    let jsonObj = JSON.stringify(agenda);

    return this.http.put(this.url + 'remarcar/', jsonObj, { headers: this.headersBase }).toPromise();
  }
}