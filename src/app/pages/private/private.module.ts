import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { PrivateRoutingModule } from '~pages/private/private-routing.module';
import { PrivateComponent } from './private.component';

import {HeaderComponent} from './components/header/header.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {FooterComponent} from './components/footer/footer.component';
import {ScrollToTopComponent} from './components/scroll-to-top/scroll-to-top.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {ItemComponent} from './components/sidenav/item/item.component';
import {ItemChildComponent} from './components/sidenav/item-child/item-child.component';

@NgModule({
  declarations: [
    PrivateComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ScrollToTopComponent,
    ProgressBarComponent,
    ItemComponent,
    ItemChildComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PrivateRoutingModule
  ],
  exports: [
    PrivateComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ScrollToTopComponent

  ],
})
export class PrivateModule { }
