import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { ContentHeaderComponent } from './content-header.component';

@NgModule({
  declarations: [ContentHeaderComponent],
  exports: [
    ContentHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContentHeaderModule { }
