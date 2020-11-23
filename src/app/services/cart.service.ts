import { Injectable } from '@angular/core';
import { Cart, MenuItem } from '../order/tenant.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private lsName = 'endemic-menu';

  get() {
    let cart = [];
    try {
      const lsCart = localStorage.getItem(this.lsName);
      if (lsCart) {
        cart = JSON.parse(lsCart);
      }
    } catch (err) {
      //
    }
    return cart;
  }

  private set(cart: Cart) {
    return localStorage.setItem(this.lsName, JSON.stringify(cart));
  }

  addItem(menuItem: MenuItem) {
    const cart = this.get();
    const { name, price, quantity } = menuItem;
    cart.push({ name, price, quantity });
    this.set(cart);
  }

  clear() {
    localStorage.removeItem(this.lsName);
  }

  calculateTotal(cart: Cart) {
    return cart.reduce((prev, next) => {
      return prev + next.price * (next.quantity || 1);
    }, 0);
  }
}
