import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './components/home/home.module';

import { CustomerModule } from './components/customer/customer.module';
import { ProductsModule } from './components/product/product.module';
import { KartComponent } from './components/sale/kart/kart.component';
import { ComprasModule } from './components/compras/compras.module';

@NgModule({
  declarations: [
    AppComponent,
    KartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HomeModule,

    CustomerModule,
    ProductsModule,
    ComprasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
