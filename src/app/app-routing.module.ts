import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '~pages/private/main-layout/main-layout.component';
import { DashboardModule } from '~pages/private/dashboard/dashboard.module';
import { LoginModule } from '~pages/public/login/login.module';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => LoginModule,
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => DashboardModule,
      },
      { path: '**', redirectTo: '/'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
