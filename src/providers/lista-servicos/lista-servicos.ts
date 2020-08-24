import { Injectable } from '@angular/core';
import { _urlBase } from '../../conexaoService/urlbase';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListaServicosProvider {

  headersBase = new Headers();
  url = _urlBase + 'servicos/';

  constructor(public http: Http) {
    this.headersBase.append('Content-Type', 'application/json');
    this.headersBase.append('Accept', 'application/json');    
  }

  buscar(id_categoria) {
    this.headersBase.set('idcategoria', id_categoria); 

    return this.http.get(this.url, { headers: this.headersBase }).toPromise();
  }  
}