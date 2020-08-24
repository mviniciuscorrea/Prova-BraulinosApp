import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import swal from 'sweetalert';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html',
})
export class AgendamentoPage {

  now = new Date();
  data = new Date().toISOString();
  hora = this.now.getHours() + ':' + new Date().getMinutes();
  item: any = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');    
  }

  salvar() {
    if ((parseInt(this.hora.slice(0, 2)) > 17) || (parseInt(this.hora.slice(0, 2)) < 8)) {
      swal({
        title: "Ooops",
        text: "Horário de funcionamento do Braulino's é das 08:00 as 18:00",
        icon: "warning",
      }).then(() => {
        return
      });
    } else {
      swal({
        title: "Confirmar?",
        text: "Agendar para o dia " + moment(this.data).format('DD/MM/YYYY') + ' as ' + this.hora + '?',
        icon: "info",
        buttons: ["Não", "Sim"],
        dangerMode: true,
      }).then((confirma) => {
        if (confirma) {
          this.viewCtrl.dismiss({ index: this.item.index, data_agendada: moment(this.data).format('DD/MM/YYYY'), hora_agendada: this.hora });
        }
      });
    }
  }

  fechar() {
    this.navCtrl.pop();
  }

}
