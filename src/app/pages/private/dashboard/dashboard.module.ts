import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {ContentHeaderModule} from '~components/content-header/content-header.module';
import {CardModule} from '~components/card/card.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild([{path: '', component: DashboardComponent}]),
    CommonModule,
    ContentHeaderModule,
    CardModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardModule { }
