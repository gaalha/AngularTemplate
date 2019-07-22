import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from '../app-routing.module';
import { MainLayoutModule } from '../main-layout/main-layout.module';

// Components
import { AppComponent } from './components/app/app.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
