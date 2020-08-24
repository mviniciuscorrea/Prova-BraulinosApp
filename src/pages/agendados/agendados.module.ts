import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendadosPage } from './agendados';

@NgModule({
  declarations: [
    AgendadosPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendadosPage),
  ],
})
export class AgendadosPageModule {}
