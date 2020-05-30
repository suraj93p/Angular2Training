import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.components";
import {ContactsComponent} from "./contacts/contacts.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
/**
 * Created by spasayat on 12/8/2016.
 */
const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'contact', component: ContactsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [HomeComponent, ProductsComponent, ContactsComponent];