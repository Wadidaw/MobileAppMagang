import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LokerPage } from './loker.page';

const routes: Routes = [
  {
    path: '',
    component: LokerPage
  },
  {
    path: 'loker-detail',
    loadChildren: () =>
    import('src/app/pages/loker-detail/loker-detail.module').then(m => m.LokerDetailPageModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LokerPageRoutingModule {}
