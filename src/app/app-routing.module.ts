import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PublicGuard } from './guards/public.guard';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=> import("./views/auth/auth.module").then(m=>m.AuthModule),
    canActivate:[PublicGuard]
  },
  {
    path:"dashboard",
    loadChildren:()=> import("./views/dashboard/dashboard.module").then(m=>m.DashboardModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
