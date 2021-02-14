import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '~app/app.component';
import {SecurityService} from '~providers/security.service';
import { AppRoutingModule } from '~app/app-routing.module';

import { MoneyPipe } from '~pipes/money.pipe';
import { SafePipe } from '~pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoneyPipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
