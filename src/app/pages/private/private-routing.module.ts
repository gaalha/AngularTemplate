import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'text',
        loadChildren: () => import('./demo-text/demo-text.module').then(m => m.DemoTextModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      },
      { path: '**', redirectTo: '/'}
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
