import { CadastroPage } from './../pages/cadastro/cadastro';
import { HistoricoPage } from './../pages/historico/historico';
import { AgendadosPage } from './../pages/agendados/agendados';
import { AgendaProvider } from './../providers/agenda/agenda';
import { AgendamentoPage } from './../pages/agendamento/agendamento';
import { CarrinhoPage } from './../pages/carrinho/carrinho';
import { ListaServicosPage } from './../pages/lista-servicos/lista-servicos';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ListaServicosProvider } from '../providers/lista-servicos/lista-servicos';
import { Comprar } from '../funcoes/comprar';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,   
    HistoricoPage,
    HomePage,
    TabsPage,
    LoginPage,
    ListaServicosPage,
    AgendamentoPage,
    CarrinhoPage,
    AgendadosPage,
    CadastroPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgendadosPage,
    HistoricoPage,
    HomePage,
    TabsPage,
    LoginPage,
    ListaServicosPage,
    AgendamentoPage,
    CarrinhoPage,
    CadastroPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaServicosProvider,
    AgendaProvider,
    Comprar,    
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,    
  ]
})
export class AppModule { }
