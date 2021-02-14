import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AngularMaterialModule} from '~app/material.module';
import {UserComponent} from './user.component';
import {ContentHeaderModule} from '~components/content-header/content-header.module';
import {UserService} from '~providers/user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UserComponent}]),
    ContentHeaderModule,
    AngularMaterialModule
  ],
  exports: [RouterModule],
  providers: [UserService]
})
export class UserModule {
}
