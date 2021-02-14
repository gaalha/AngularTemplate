import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '~app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '~app/app.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
