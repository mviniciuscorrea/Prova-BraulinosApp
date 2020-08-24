import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaServicosPage } from './lista-servicos';

@NgModule({
  declarations: [
    ListaServicosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaServicosPage),
  ],
})
export class ListaServicosPageModule {}
