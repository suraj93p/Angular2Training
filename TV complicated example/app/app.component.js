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
var channel_detail_component_1 = require('./channel-detail.component');
var CHANNELS = [
    { "id": 11, "name": "Zee News" },
    { "id": 12, "name": "Zee Business" },
    { "id": 13, "name": "Sony" },
    { "id": 14, "name": "ETV Raj" },
    { "id": 15, "name": "Colors" },
    { "id": 16, "name": "ET Now" },
    { "id": 17, "name": "Bloomberg" },
    { "id": 18, "name": "BBC" },
    { "id": 19, "name": "CNN" },
    { "id": 20, "name": "Nat Geo" }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tata Sky: Popular TV Channels";
        this.channels = CHANNELS;
    }
    AppComponent.prototype.onSelect = function (channel) { this.selectedChannel = channel; console.log(channel); };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n       <h2 id=\"hdr\">{{title}}</h2>\n      <h5>My TV Channels</h5>\n      <section>\n        <ul class=\"favs\">\n          <li *ngFor=\" let channel of channels\"\n                [class.selected]=\"channel === selectedChannel\"\n                 (click)=\"onSelect(channel)\">\n       \n            <span class=\"badge\">{{channel.id}}</span> {{channel.name}}\n          </li>\n        </ul>\n      </section>\n      \n      <aside> Info Panel: \n          <my-channel-detail  [channel]=\"selectedChannel\"></my-channel-detail>\n       </aside>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    \n    #hdr{color: #8b3b4f;}\n    section, aside{margin-right: 5em; float: left;}\n    aside, #chn{border: 1px solid blue; padding: 1.2em;}\n    \n    \n    .favs {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .favs li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: lightseagreen;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .favs li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .favs li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .favs .text {\n      position: relative;\n      top: -3px;\n    }\n    .favs .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
            entryComponents: [channel_detail_component_1.ChannelDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map