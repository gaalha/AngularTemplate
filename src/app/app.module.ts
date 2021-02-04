import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from '~app/app-routing.module';
import { MainLayoutModule } from '~pages/private/main-layout/main-layout.module';

// Components
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
    MainLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
