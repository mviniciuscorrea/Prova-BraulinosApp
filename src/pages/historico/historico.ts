import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AgendaProvider } from './../../providers/agenda/agenda';
import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  servicos: any = null;
  //now = new Date();
  dataDe = "";
  dataAte = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serviceAgenda: AgendaProvider,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {
  }

  pesquisar() {
    if ((this.dataDe == '') || (this.dataAte == '')) {
      this.toastCtrl.create({
        message: 'Informe uma data inicial e final para pesquisar',
        duration: 2000
      }).present();

      return;
    }

    this.carregarServicos(this.dataDe, this.dataAte);
  }

  carregarServicos(dtinicial, dtfinal) {
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      spinner: 'bubbles'
    });

    loader.present();

    this.serviceAgenda.buscar(null, dtinicial, dtfinal).then(resp => {
      loader.dismiss();

      if (resp.json().length > 0) {
        this.servicos = resp.json();
      } else {
        swal({
          title: "Atenção!",
          text: "Não tem histórico de serviços!",
          timer: 2000,
          icon: "info"
        });

        this.navCtrl.setRoot(HomePage);
      }
    }).catch(() => {
      loader.dismiss();

    })
  }

  ionViewWillEnter() {
    this.servicos = [];
  }

}
