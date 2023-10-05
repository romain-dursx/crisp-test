import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginModule} from "./component/login/login.module";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      LoginModule,
      AppRoutingModule,
      RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
