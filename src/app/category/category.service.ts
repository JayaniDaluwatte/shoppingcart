import { Injectable } from '@angular/core';
import { Category } from "app/category/category";

@Injectable()
export class CategoryService {

  private categories: Category[] = [
    new Category('Kids', 'k'),
    new Category('Ladies', 'l'),
    new Category('Gents', 'g')
  ]

  constructor() { }

  getCategories() {
    return this.categories;
  }

}
