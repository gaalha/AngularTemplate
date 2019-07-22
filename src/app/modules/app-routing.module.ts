import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layout
import { MainLayoutComponent } from './main-layout/main-layout.component';

// Pages
import { IndexComponent } from './app/components/index/index.component';


const routes: Routes = [
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
