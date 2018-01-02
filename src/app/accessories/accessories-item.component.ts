import { Component, OnInit, Input } from '@angular/core';
import { Accessory } from "app/accessories/accessory";

@Component({
  selector: 'sc-accessories-item',
  templateUrl: './accessories-item.component.html',
  styleUrls: ['./accessories-item.component.css']
})
export class AccessoriesItemComponent implements OnInit {
  @Input() accessory: Accessory;
  
  constructor() { }

  ngOnInit() {
  }
}
