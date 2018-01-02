import { Component, OnInit } from '@angular/core';
import { CategoryService } from "app/category/category.service";
import { SubCategoryService } from "app/subCategory/sub-category.service";
import { Category } from "app/category/category";
import { Subcategory } from "app/subCategory/sub-ctaegory";
import { Router } from "@angular/router";

@Component({
  selector: 'sc-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  categories: Category[];
  subCategories: Subcategory[];

  constructor(private categoryService: CategoryService, 
              private subCategoryService: SubCategoryService, 
              private router: Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.subCategories = this.subCategoryService.getSubCategories();
  }

  onClick(categoryId: string) {
    this.router.navigate(['/accessories'], {queryParams:{'category': categoryId}});
  }

}
