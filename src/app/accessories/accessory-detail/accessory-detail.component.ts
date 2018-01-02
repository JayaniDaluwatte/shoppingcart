import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { AccessoriesService } from "app/accessories/accessories.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Accessory } from "app/accessories/accessory";
import { CartItem } from "app/shopping-list/cart-item";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'sc-accessory-detail',
  templateUrl: './accessory-detail.component.html',
  styleUrls: ['./accessory-detail.component.css']
})
export class AccessoryDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private accessoryId: number;
  private selectedAcssessory: Accessory;
  private imageIndex: number = 0;
  private quantity: number = 1;
  private totalPrice: number;

  constructor(private accessoriesService: AccessoriesService, 
              private route: ActivatedRoute,
              private router: Router,
              private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.accessoryId = param['id'];
        this.selectedAcssessory = this.accessoriesService.getAccessory(this.accessoryId);
        this.totalPrice = this.selectedAcssessory.price;
      })
  }

  onClick(imageIndex: number) {
    this.imageIndex = imageIndex;
  }

  onChange(event: any) {
    this.quantity = event.target.value;
    this.totalPrice = event.target.value * this.selectedAcssessory.price;
  }

  onAdd() {
    let selectedItem: CartItem = new CartItem(
      this.selectedAcssessory.name,
      this.selectedAcssessory.description,
      this.selectedAcssessory.imagePath[0],
      this.selectedAcssessory.price,
      +this.quantity,
      this.totalPrice
    );
    this.shoppingListService.addItem(selectedItem);
  }

  onNavigate() {
    this.router.navigate(['/', 'shoppingList']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
