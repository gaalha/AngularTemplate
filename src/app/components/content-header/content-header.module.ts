import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './content-header.component';
import {RouterModule} from '@angular/router';

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
