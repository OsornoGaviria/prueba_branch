import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllRegistrosPage } from './all-registros.page';

const routes: Routes = [
  {
    path: '',
    component: AllRegistrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRegistrosPageRoutingModule {}
