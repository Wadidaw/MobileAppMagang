import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LokerDetailPageRoutingModule } from './loker-detail-routing.module';

import { LokerDetailPage } from './loker-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LokerDetailPageRoutingModule
  ],
  declarations: [LokerDetailPage]
})
export class LokerDetailPageModule {}
