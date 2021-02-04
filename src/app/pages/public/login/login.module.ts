import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {LoginComponent} from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    CommonModule
  ],
  exports: [
    RouterModule,
  ]
})
export class LoginModule { }
