import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from "app/accessories/accessories.component";
import { HomeComponent } from "app/home/home.component";
import { AccessoryDetailComponent } from "app/accessories/accessory-detail/accessory-detail.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { UserComponent } from "app/user/user.component";
//import { ACCESSORIES_ROUTES } from "app/accessories/accessories.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'accessories', component: AccessoriesComponent },
    { path: 'accessories/:id', component: AccessoryDetailComponent },
    { path: 'shoppingList', component: ShoppingListComponent},
    { path: 'register', component:UserComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);