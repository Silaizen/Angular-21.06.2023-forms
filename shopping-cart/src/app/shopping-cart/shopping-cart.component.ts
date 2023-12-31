import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  constructor(private shoppingCart: ShoppingCartService) {}

  getTotalQuantity(): number {
    return this.shoppingCart.getTotalQuantity();
  }
}
