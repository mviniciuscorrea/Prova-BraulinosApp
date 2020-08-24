import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import swal from 'sweetalert'

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  nome = '';
  usuario = '';
  senha = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serviceLogin: LoginProvider,) {
  }

  cadastrar() {
    if ((this.nome == '') || (this.senha == '') || (this.usuario == '')) {
      return swal({
        title: "Atenção!",
        text: "Todos os campos são obrigatórios",
        timer: 2000,
        icon: "info"
      });
    }

    let dados = {
      nome: this.nome,
      usuario: this.usuario,
      senha: this.senha
    }

    this.serviceLogin.novoUsuario(dados).then(() => {
      swal({
        title: "Sucesso!",
        text: "Cadastro realizado!", 
        icon: "success"
      }).then(resp => {
        if (resp) {
          this.voltar();
        }
      })      
    })
  }

  voltar() {
    this.navCtrl.pop();
  }

}
