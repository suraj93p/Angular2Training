"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by spasayat on 12/8/2016.
 */
var core_1 = require('@angular/core');
var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // moduleId: module.id,
            template: "\n            <h3>Products</h3>\n            <hr>\n            This is the products page. <br><br>\n          "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.components.js.map