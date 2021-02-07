import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { DemoTextComponent } from './demo-text.component';
import {ContentHeaderModule} from '~components/content-header/content-header.module';

@NgModule({
  declarations: [DemoTextComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DemoTextComponent}]),
    ContentHeaderModule,
  ],
  exports: [RouterModule]
})
export class DemoTextModule { }
