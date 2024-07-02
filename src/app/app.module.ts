import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './controller/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';

@NgModule({
  declarations: [
  LoginComponent,
  RegistrarComponent,
  ProcesarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProcesarPedidoComponent]
})
export class AppModule { }
