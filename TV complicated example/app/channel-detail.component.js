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
var core_1 = require('@angular/core');
var channel_1 = require('./channel');
var ChannelDetailComponent = (function () {
    function ChannelDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', channel_1.Channel)
    ], ChannelDetailComponent.prototype, "channel", void 0);
    ChannelDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-channel-detail',
            template: "\n\t\t<aside *ngIf=\"channel\">\n      \t\t<h4>{{channel.name}} Description:</h4>\n      \t\t<div><label>id: </label>{{channel.id}}</div>\n      \t\t<div>\n        \t\t<label>name: </label>\n        \t\t<input [(ngModel)]=\"channel.name\" placeholder=\"name\"/>\n      \t\t</div>\n    \t</aside>\n    \t"
        }), 
        __metadata('design:paramtypes', [])
    ], ChannelDetailComponent);
    return ChannelDetailComponent;
}());
exports.ChannelDetailComponent = ChannelDetailComponent;
//# sourceMappingURL=channel-detail.component.js.map