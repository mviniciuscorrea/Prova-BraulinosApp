import { HistoricoPage } from './../historico/historico';
import { AgendadosPage } from './../agendados/agendados';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AgendadosPage;
  tab3Root = HistoricoPage;

  constructor() {

  }
}
