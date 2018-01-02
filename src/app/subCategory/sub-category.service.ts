import { Injectable } from '@angular/core';
import { Subcategory } from "app/subCategory/sub-ctaegory";

@Injectable()
export class SubCategoryService {

  private subCategories: Subcategory[] = [
    new Subcategory('Frock', 'kfrock'),
    new Subcategory('Tshirt', 'ktshirt'),
    new Subcategory('Trouser', 'ktrouser'),
    new Subcategory('Scaff', 'kscaff'),
    new Subcategory('Shoes', 'kshoes'),
  ]

  constructor() { }

  getSubCategories() {
    return this.subCategories;
  }

}
