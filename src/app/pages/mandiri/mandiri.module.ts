import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandiriPageRoutingModule } from './mandiri-routing.module';

import { MandiriPage } from './mandiri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandiriPageRoutingModule
  ],
  declarations: [MandiriPage]
})
export class MandiriPageModule {}
