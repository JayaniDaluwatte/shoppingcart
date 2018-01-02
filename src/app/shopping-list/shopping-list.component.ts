import { Component, OnInit } from '@angular/core';
import { CartItem } from "app/shopping-list/cart-item";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'sc-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private cartItems: CartItem[] = [];
  private sum: number = 0;
  private count: number = 0;

  constructor(private shoppingListService: ShoppingListService, private router: Router) { }

  ngOnInit() {
    this.cartItems = this.shoppingListService.getItems();
    this.calSum();
  }

  onRemove(index: number) {
    this.shoppingListService.removeItem(index);
    this.calSum();
  }

  onChange(event: any, index: number) {
    this.cartItems[index].quantity = +event.target.value;
    this.cartItems[index].totalPrice = this.cartItems[index].unitPrice * event.target.value; 
    this.calSum();
  }

  onUpdate(index: number) {
    this.shoppingListService.updateItem(this.cartItems[index]);
    this.calSum();
    this.onNavigate();
  }

  calSum() {
    let value = 0;
    let count = 0;

    for(let i=0; i<this.cartItems.length; i++) {
      value += this.cartItems[i].totalPrice;
      count += this.cartItems[i].quantity;
    }
    this.sum = value;
    this.count = count;
  }

  onNavigate() {
    this.router.navigate(['/', 'shoppingList']);
  }

}
