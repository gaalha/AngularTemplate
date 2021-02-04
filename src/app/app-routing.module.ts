import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// {
//   path: '',
//   loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule),
// },

// {
//   path: '',
//     redirectTo: '',
//   pathMatch: 'full'
// }

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
