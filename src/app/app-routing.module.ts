import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRESTGuard } from '@app/guards/authREST.guard';
const routes: Routes = [
  
  { path: 'home',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  
  { path: 'proDetail', loadChildren: () => import('./components/product/detail/detail.module').then(m => m.DetailModule) },
  
  { path: 'proAll', loadChildren: () => import('./components/product/all/all.module').then(m => m.AllModule) },
  
  { path: 'proAdd', loadChildren: () => import('./components/product/add/add.module').then(m => m.AddModule) },

  { path: 'proEdit', loadChildren: () => import('./components/product/edit/edit.module').then(m => m.EditModule) },

  { path: 'cateadd', loadChildren: () => import('./components/category/addcategory/addcategory.module').then(m => m.AddcategoryModule) },

  { path: 'cateall', loadChildren: () => import('./components/category/allcategory/allcategory.module').then(m => m.AllcategoryModule) },

  { path: 'catedetail', loadChildren: () => import('./components/category/detailcategory/detailcategory.module').then(m => m.DetailcategoryModule) },
  
  { path: 'editcategory', loadChildren: () => import('./components/category/editcategory/editcategory.module').then(m => m.EditcategoryModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
