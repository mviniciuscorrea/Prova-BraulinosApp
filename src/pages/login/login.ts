import { CadastroPage } from './../cadastro/cadastro';
import { Comprar } from './../../funcoes/comprar';
import { LoginProvider } from './../../providers/login/login';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario = "";
  senha = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serviceLogin: LoginProvider,
    private comprar: Comprar) {
  }

  novoUsuario() {
    this.navCtrl.push(CadastroPage);
  }

  entrar() {
    if ((this.usuario != '') && (this.senha != '')) {
      this.serviceLogin.login(this.usuario, this.senha).then(resp => {
        window.localStorage.setItem("usuario", resp.json().id_usuario);
        this.comprar.limparCarrinho();

        this.navCtrl.push(TabsPage);
      }).catch(er => {
        if (er.status == 401) {
          swal({
            title: "Não Encontrado",
            text: "Usuário ou senha inválido",
            icon: "error",
          }).then(() => {
          });
        }
      })

    }
  }

}
