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
var jssha = require('jssha');
var Sha1Service = (function () {
    function Sha1Service() {
        this._jssha = jssha;
    }
    Sha1Service.prototype.getHash = function (key, text) {
        var shaObj = new this._jssha("SHA-1", "TEXT");
        shaObj.setHMACKey(key, "TEXT");
        shaObj.update(text);
        return shaObj.getHMAC("B64");
    };
    Sha1Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Sha1Service);
    return Sha1Service;
}());
exports.Sha1Service = Sha1Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NoYTEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBRy9CO0lBQ0M7UUFFUSxXQUFNLEdBQWdCLEtBQUssQ0FBQztJQUZ0QixDQUFDO0lBSWYsNkJBQU8sR0FBUCxVQUFRLEdBQVUsRUFBQyxJQUFXO1FBQzdCLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBWEY7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWFiLGtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxtQkFBVyxjQVl2QixDQUFBIn0=