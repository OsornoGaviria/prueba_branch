import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllRegistrosPageRoutingModule } from './all-registros-routing.module';

import { AllRegistrosPage } from './all-registros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllRegistrosPageRoutingModule
  ],
  declarations: [AllRegistrosPage]
})
export class AllRegistrosPageModule {}
