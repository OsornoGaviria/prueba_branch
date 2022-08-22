import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgitroParticipantePage } from './resgitro-participante.page';

const routes: Routes = [
  {
    path: '',
    component: ResgitroParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgitroParticipantePageRoutingModule {}
