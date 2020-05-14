import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
path: '',
loadChildren: () =>
import('./index/index.module').then(m => m.IndexPageModule)
},
{
    path: 'index',
    loadChildren: () =>
    import('./index/index.module').then(m => m.IndexPageModule)
    },
{
path: '',
loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
},
{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
  {
    path: 'loker',
    loadChildren: () => import('./pages/loker/loker.module').then( m => m.LokerPageModule)
  },
  {
    path: 'loker-detail/:id',
    loadChildren: () => import('./pages/loker-detail/loker-detail.module').then( m => m.LokerDetailPageModule)
  },
  {
    path: 'daftarmagang',
    loadChildren: () => import('./pages/daftarmagang/daftarmagang.module').then( m => m.DaftarmagangPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./pages/profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'profile-detail/:mhs',
    loadChildren: () => import('./pages/profile-detail/profile-detail.module').then( m => m.ProfileDetailPageModule)
  },
  {
    path: 'mandiri',
    loadChildren: () => import('./pages/mandiri/mandiri.module').then( m => m.MandiriPageModule)
  },
];
@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule {}
