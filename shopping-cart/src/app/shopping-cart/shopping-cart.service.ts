import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private totalQuantity = 0;

  updateTotalQuantity(quantity: number) {
    this.totalQuantity = quantity;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }
}
