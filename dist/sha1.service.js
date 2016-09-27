var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as jssha from 'jssha';
export var Sha1Service = (function () {
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
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], Sha1Service);
    return Sha1Service;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NoYTEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWU7T0FFbkMsS0FBSyxLQUFLLE1BQU0sT0FBTztBQUc5QjtJQUNDO1FBRVEsV0FBTSxHQUFnQixLQUFLLENBQUM7SUFGdEIsQ0FBQztJQUlmLDZCQUFPLEdBQVAsVUFBUSxHQUFVLEVBQUMsSUFBVztRQUM3QixJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVhGO1FBQUMsVUFBVSxFQUFFOzttQkFBQTtJQWFiLGtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUMifQ==