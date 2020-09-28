import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layout
import { MainLayoutComponent } from './modules/main-layout/main-layout.component';

// Pages
import { IndexComponent } from './modules/index/index.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: '**', redirectTo: '/'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
