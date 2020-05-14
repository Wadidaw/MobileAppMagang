import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarmagangPageRoutingModule } from './daftarmagang-routing.module';

import { DaftarmagangPage } from './daftarmagang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarmagangPageRoutingModule
  ],
  declarations: [DaftarmagangPage]
})
export class DaftarmagangPageModule {}
