import { CarrinhoPage } from './../carrinho/carrinho';
import { ListaServicosPage } from './../lista-servicos/lista-servicos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comprar } from '../../funcoes/comprar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  carrinho = 0;

  constructor(public navCtrl: NavController, private comprar: Comprar) {
  }

  ionViewWillEnter(){
    this.carrinho = this.comprar.consultarQtdeCarrinho();
  }

  verCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

  abrirServicos(id_categoria = 0) {
    this.navCtrl.push(ListaServicosPage, { id_categoria: id_categoria });
  }
}
