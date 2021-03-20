import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import  locaelEs from '@angular/common/locales/es-PA';
import {   registerLocaleData  } from '@angular/common';
registerLocaleData(locaelEs);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
  ],
  providers: [

    {provide:LOCALE_ID, useValue:'es-PA'},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
