import { CarrinhoPage } from './../carrinho/carrinho';
import { ListaServicosProvider } from './../../providers/lista-servicos/lista-servicos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import swal from 'sweetalert'
import { Comprar } from '../../funcoes/comprar';

@IonicPage()
@Component({
  selector: 'page-lista-servicos',
  templateUrl: 'lista-servicos.html',
})
export class ListaServicosPage {

  carrinho = 0;
  titulo = "";
  id_categoria = 0;
  listaServicos: any = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private comprar: Comprar,
    private serviceServico: ListaServicosProvider) {
  }

  ionViewWillEnter() {
    this.carrinho = this.comprar.consultarQtdeCarrinho();
  }

  ionViewDidLoad() {
    this.id_categoria = parseInt(this.navParams.get('id_categoria'));

    if (this.id_categoria > 0) {
      const loader = this.loadingCtrl.create({
        content: "Carregando...",
        spinner: 'bubbles'
      });

      loader.present();

      this.serviceServico.buscar(this.id_categoria).then(result => {
        this.listaServicos = [];
        loader.dismiss();

        if (result.json().length == 0) {

          swal({
            title: "Não Encontrado!",
            text: "Nenhum serviço para essa categoria",
            timer: 2000,
            icon: "info"
          });

          return this.navCtrl.pop();
        } else {
          this.listaServicos = result.json();
        }

      }).catch(e => {
        let erro = JSON.parse(e._body);
        swal("Erro ao carregar!", erro.Retorno, "error");
        loader.dismiss();
      })

    } else {
      swal("", "Categoria não habilitada no momento", "error", {
        buttons: [false],
        timer: 2000,
      }).then(() => {
        this.navCtrl.pop();
      })
    }
  }

  verCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

  addCarrinho(servico) {
    this.carrinho = this.comprar.adicionarCarrinho(servico.id, servico.servico, servico.valor);
  }
}
