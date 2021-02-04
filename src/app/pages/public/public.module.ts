import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicRoutingModule } from '~pages/public/public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
