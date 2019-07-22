import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import { AppRoutingModule } from '../app-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, FooterComponent, MainLayoutComponent],
  exports: [HeaderComponent, SidenavComponent, FooterComponent, MainLayoutComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class MainLayoutModule { }
