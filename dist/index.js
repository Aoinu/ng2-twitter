var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
export * from './sha1.service';
export * from './oauth.service';
export * from './authorized-request.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Sha1Service } from './sha1.service';
import { OAuthService } from './oauth.service';
import { AuthorizedRequestService } from './authorized-request.service';
export var Ng2TwitterModule = (function () {
    function Ng2TwitterModule() {
    }
    Ng2TwitterModule = __decorate([
        NgModule({
            imports: [HttpModule],
            providers: [
                Sha1Service,
                OAuthService,
                AuthorizedRequestService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2TwitterModule);
    return Ng2TwitterModule;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsY0FBYyxnQkFBZ0IsQ0FBQztBQUMvQixjQUFjLGlCQUFpQixDQUFDO0FBQ2hDLGNBQWMsOEJBQThCLENBQUM7T0FFdEMsRUFDTixRQUFRLEVBQ1IsTUFBTSxlQUFlO09BQ2YsRUFDTixVQUFVLEVBQ1YsTUFBTSxlQUFlO09BRWYsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0I7T0FDckMsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUI7T0FDdkMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QjtBQVV2RTtJQUFBO0lBQThCLENBQUM7SUFSL0I7UUFBQyxRQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDckIsU0FBUyxFQUFFO2dCQUNWLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWix3QkFBd0I7YUFDeEI7U0FDRCxDQUFDOzt3QkFBQTtJQUM0Qix1QkFBQztBQUFELENBQUMsQUFBL0IsSUFBK0IifQ==