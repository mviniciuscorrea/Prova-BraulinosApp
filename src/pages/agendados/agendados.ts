import { AgendamentoPage } from './../agendamento/agendamento';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { AgendaProvider } from './../../providers/agenda/agenda';
import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-agendados',
  templateUrl: 'agendados.html',
})
export class AgendadosPage {

  servicos: any = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serviceAgenda: AgendaProvider,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {
  }

  carregarServicos() {
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      spinner: 'bubbles'
    });

    loader.present();

    this.serviceAgenda.buscar(false).then(resp => {
      loader.dismiss();

      if (resp.json().length > 0) {
        this.servicos = resp.json();
      } else {
        swal({
          title: "Atenção!",
          text: "Não tem serviços de agendamento em aberto!",
          timer: 2000,
          icon: "info"
        });        
      }
    })
  }

  ionViewWillEnter() {
    this.carregarServicos();
  }

  mensagemExpirado() {
    this.toastCtrl.create({
      message: 'Limite para remarcar excedido',
      duration: 2000
    }).present();
  }

  remarcar(servico) {
    if (servico.confirmado) {
      return swal({
        title: "Atenção!",
        text: "Agendamentos confirmados não é permitido fazer o reagendamento!",
        timer: 2000,
        icon: "warning"
      });

    }

    let modal = this.modalCtrl.create(AgendamentoPage, { item: servico });
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        this.servicos[parseInt(data.index) - 1].data_agendamento = data.data_agendada;
        this.servicos[parseInt(data.index) - 1].hora_agendamento = data.hora_agendada;

        this.serviceAgenda.remarcar(this.servicos[parseInt(data.index) - 1]).then(() => {
          swal({
            title: "Salvo!",
            text: "Remarcado com sucesso!",
            timer: 2000,
            icon: "success"
          });

          this.carregarServicos();
        }).catch(resp => {
          console.log(resp);
        })
      }
    });
  }
}
