import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Product 1', quantity: 0 },
    { name: 'Product 2', quantity: 0 },
    { name: 'Product 3', quantity: 0 }
  ];

  constructor(public shoppingCart: ShoppingCartService) {}

  updateQuantity(index: number, value: number) {
    if (index >= 0 && index < this.products.length) {
      this.products[index].quantity = value;
      this.shoppingCart.updateTotalQuantity(this.calculateTotalQuantity());
    }
  }

  private calculateTotalQuantity(): number {
    let total = 0;
    for (const product of this.products) {
      total += product.quantity;
    }
    return total;
  }
}
