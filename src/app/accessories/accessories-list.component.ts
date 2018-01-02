import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from "app/accessories/accessories.service";
import { Accessory } from "app/accessories/accessory";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'sc-accessories-list',
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.css']
})
export class AccessoriesListComponent implements OnInit {

  accessories: Accessory[] = [];
  private categoryId: string = "all";
  private subscription: Subscription;

  constructor(private accessoriesService: AccessoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let cid;

    this.subscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        cid = queryParam['category'];
        if(cid === undefined || cid === null) {
          this.categoryId = "all";
        }
        else {
          this.categoryId = cid;
        }
        this.accessories = this.accessoriesService.getAccessories(this.categoryId);
      }
    );
  }

}
