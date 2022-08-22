import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroSuccesPageRoutingModule } from './registro-succes-routing.module';

import { RegistroSuccesPage } from './registro-succes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroSuccesPageRoutingModule
  ],
  declarations: [RegistroSuccesPage]
})
export class RegistroSuccesPageModule {}
