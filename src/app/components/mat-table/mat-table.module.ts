import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableComponent } from './mat-table.component';
import {AngularMaterialModule} from '~app/material.module';

@NgModule({
  declarations: [MatTableComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class MatTableModule { }
