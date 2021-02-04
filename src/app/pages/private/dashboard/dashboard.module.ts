import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [DashboardComponent, CardComponent],
  imports: [
    RouterModule.forChild([{path: '', component: DashboardComponent}]),
    CommonModule
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardModule { }
