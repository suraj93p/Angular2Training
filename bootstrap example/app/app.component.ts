import { Component } from '@angular/core';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.components";
import {ContactsComponent} from "./components/contacts/contacts.component";
@Component({
    selector: 'my-app',
    templateUrl: "./app/app.component.html",
    styleUrls : ["./app/app.component.css"],
    entryComponents: [HomeComponent, ProductsComponent, ContactsComponent]
})

export class AppComponent {

}

