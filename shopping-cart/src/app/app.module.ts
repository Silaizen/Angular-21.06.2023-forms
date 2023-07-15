import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service'; // Добавьте эту строку

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ShoppingCartService // Добавьте эту строку
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
