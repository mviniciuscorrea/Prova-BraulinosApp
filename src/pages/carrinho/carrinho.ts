import { HomePage } from './../home/home';
import { AgendaProvider } from './../../providers/agenda/agenda';
import { AgendamentoPage } from './../agendamento/agendamento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { Comprar } from '../../funcoes/comprar';
import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  total = 0;
  servico: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private comprar: Comprar,
    private serviceAgenda: AgendaProvider,
    private modalCtrl: ModalController) {
  }

  carregarCarrinho() {
    let carrinho = this.comprar.consultarQtdeCarrinho();

    if (carrinho < 1) {
      swal({
        title: "Ooops",
        text: "Seu carrinho está vazio",
        icon: "info",
      }).then(() => {
        return this.navCtrl.pop();
      });
    } else {
      this.servico = [];
      this.servico = this.comprar.buscarItensCarrinho()
      this.total = this.servico.total;
    }
  }

  ionViewDidLoad() {
    this.carregarCarrinho();
  }

  agendamento(item) {
    let modal = this.modalCtrl.create(AgendamentoPage, { item: item });
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        this.servico.itens[parseInt(data.index)].data_agendamento = data.data_agendada;
        this.servico.itens[parseInt(data.index)].hora_agendamento = data.hora_agendada;
      }
    });
  }

  opcoes(item) {
    this.actionSheetCtrl.create({
      title: '1x ' + item.servico,
      buttons: [
        {
          text: 'Agendar Serviço',
          icon: 'md-clock',
          handler: () => {
            this.agendamento(item);
          }
        },
        {
          text: 'Remover Serviço',
          icon: 'close-circle',
          handler: () => {
            this.servico.itens.splice(item.index, 1);

            const promises = [];
            const promise = this.comprar.excluirItemCarrinho(this.servico.itens);

            Promise.all(promises).then(() => {
              this.carregarCarrinho();
            });
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'md-arrow-round-back',
        }
      ]
    }).present();
  }

  maisServicos() {
    this.navCtrl.setRoot(HomePage);
  }

  salvar() {
    let servico: any = null;
    servico = this.servico.itens.find(s => s.data_agendamento === '');

    if (servico != null) {
      swal({
        title: "Atenção!",
        text: "Há serviços sem agendamento!",
        timer: 2000,
        icon: "info"
      });
    } else {
      swal({
        title: "Confirmar?",
        text: "Realizar as reservas dos serviços?",
        icon: "info",
        buttons: ["Cancelar", "Reservar"],
        dangerMode: true,
      }).then((confirma) => {
        if (confirma) {
          this.serviceAgenda.incluir(this.servico.itens).then(resp => {
            this.comprar.limparCarrinho();

            swal({
              title: "Salvo!",
              text: "Agendado com sucesso!",
              timer: 2000,
              icon: "success"
            });

            this.navCtrl.setRoot(HomePage);
          }).catch(e => {
            let erro = JSON.parse(e._body);
            swal("Erro ao salvar!", erro.Retorno, "error");
          });
        }
      });
    }

  }

}
