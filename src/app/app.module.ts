import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { routing } from "app/app.route";
import { MenubarComponent } from './menubar/menubar.component';
import { AccessoriesListComponent } from './accessories/accessories-list.component';
import { AccessoriesItemComponent } from './accessories/accessories-item.component';
import { AccessoriesService } from "app/accessories/accessories.service";
import { AccessoryDetailComponent } from './accessories/accessory-detail/accessory-detail.component';
import { CategoryService } from "app/category/category.service";
import { SubCategoryService } from "app/subCategory/sub-category.service";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { UserComponent } from './user/user.component';
import { DropdownDirective } from './header/dropdown.directive';
import { UserService } from "app/user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AccessoriesComponent,
    MenubarComponent,
    AccessoriesListComponent,
    AccessoriesItemComponent,
    AccessoryDetailComponent,
    ShoppingListComponent,
    UserComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    AccessoriesService,
    CategoryService,
    SubCategoryService,
    ShoppingListService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
