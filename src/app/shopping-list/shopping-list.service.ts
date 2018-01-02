import { Injectable } from '@angular/core';
import { CartItem } from "app/shopping-list/cart-item";

@Injectable()
export class ShoppingListService {

  private cartItems: CartItem[] = [];

  constructor() { }

  getItems() {
    return this.cartItems;
  }

  addItem(cartItem: CartItem) {
    let item: CartItem;

    if(this.cartItems.length == 0) {
      this.cartItems.push(cartItem);
    } 
    else {
      item = this.cartItems.find(item => item.name === cartItem.name);
      if(item != null) {
        for(let i=0; i<this.cartItems.length; i++) {
        if(this.cartItems[i].name === cartItem.name) {
          this.cartItems[i].quantity = this.cartItems[i].quantity + cartItem.quantity;
          this.cartItems[i].totalPrice = this.cartItems[i].totalPrice + cartItem.totalPrice;
        }
      } 
      }
      else{
        this.cartItems.push(cartItem);
      }
    }
  }

  updateItem(cartItem: CartItem) {
    for(let i=0; i<this.cartItems.length; i++) {
        if(this.cartItems[i].name === cartItem.name) {
          this.cartItems[i].quantity = cartItem.quantity;
          this.cartItems[i].totalPrice = cartItem.totalPrice;
        }
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

}
