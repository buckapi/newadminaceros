import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRESTGuard } from '@app/guards/authREST.guard';
const routes: Routes = [
  
  { path: 'home',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  
  { path: 'externalData', loadChildren: () => import('./components/externalData/external-data.module').then(m => m.ExternalDataModule) },
  
  { path: 'c2oDetail', loadChildren: () => import('./components/click2order/detail/detail.module').then(m => m.DetailModule) },
  
  { path: 'c2oAll', loadChildren: () => import('./components/click2order/all/all.module').then(m => m.AllModule) },
  
  { path: 'c2oAdd', loadChildren: () => import('./components/click2order/add/add.module').then(m => m.AddModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
