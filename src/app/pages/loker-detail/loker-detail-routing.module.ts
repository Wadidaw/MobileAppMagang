import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LokerDetailPage } from './loker-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LokerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LokerDetailPageRoutingModule {}
