import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroSuccesPage } from './registro-succes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroSuccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroSuccesPageRoutingModule {}
