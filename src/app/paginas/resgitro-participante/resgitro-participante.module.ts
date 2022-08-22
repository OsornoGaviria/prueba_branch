import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgitroParticipantePageRoutingModule } from './resgitro-participante-routing.module';

import { ResgitroParticipantePage } from './resgitro-participante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ResgitroParticipantePageRoutingModule
  ],
  declarations: [ResgitroParticipantePage]
})
export class ResgitroParticipantePageModule {}
