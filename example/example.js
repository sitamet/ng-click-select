/// <reference path="../typings/angular2/angular2.d.ts" />
/**
 * Example of click select.
 */
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var ng_click_select_1 = require("../src/ng-click-select");
var NgClickSelectExample = (function () {
    function NgClickSelectExample() {
    }
    NgClickSelectExample = __decorate([
        angular2_1.Component({
            selector: 'ng-click-select-example',
        }),
        angular2_1.View({
            templateUrl: 'example.html',
            directives: [ng_click_select_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], NgClickSelectExample);
    return NgClickSelectExample;
})();
angular2_1.bootstrap(NgClickSelectExample);
exports.default = NgClickSelectExample;
