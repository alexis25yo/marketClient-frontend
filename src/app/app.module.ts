import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './controller/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './controller/registrar/registrar.component';

@NgModule({
  declarations: [
  LoginComponent,
  RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RegistrarComponent]
})
export class AppModule { }
