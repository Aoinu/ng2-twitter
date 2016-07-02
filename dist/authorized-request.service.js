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
var http_1 = require('@angular/http');
var oauth_service_1 = require('./oauth.service');
var AuthorizedRequestService = (function () {
    function AuthorizedRequestService(oauth, http) {
        this.oauth = oauth;
        this.http = http;
    }
    AuthorizedRequestService.prototype.get = function (url, query, oauthKey, oauthToken) {
        var _this = this;
        var authHeader = new http_1.Headers();
        authHeader.append('Authorization', this.oauth.createHeaderString('GET', url, query, oauthKey, oauthToken, this.oauth.createNonce(), this.oauth.createTimestamp()));
        var requestUrl = url + '?';
        var queryArray = [];
        Object.keys(query).forEach(function (k) {
            queryArray.push({
                key: _this.oauth.fixedEncodeURIComponent(k),
                val: _this.oauth.fixedEncodeURIComponent(query[k])
            });
        });
        requestUrl += queryArray.map(function (param) {
            return param.key + '=' + param.val;
        }).join('&');
        return this.http.get(requestUrl, { headers: authHeader });
    };
    AuthorizedRequestService.prototype.post = function (url, body, oauthKey, oauthToken) {
        var authHeader = new http_1.Headers();
        authHeader.append('Authorization', this.oauth.createHeaderString('GET', url, body, oauthKey, oauthToken, this.oauth.createNonce(), this.oauth.createTimestamp()));
        return this.http.post(url, JSON.stringify(body), { headers: authHeader });
    };
    AuthorizedRequestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [oauth_service_1.OAuthService, http_1.Http])
    ], AuthorizedRequestService);
    return AuthorizedRequestService;
}());
exports.AuthorizedRequestService = AuthorizedRequestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplZC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aG9yaXplZC1yZXF1ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFLTyxlQUFlLENBQUMsQ0FBQTtBQUd2Qiw4QkFJTyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pCO0lBQ0Msa0NBQ1MsS0FBbUIsRUFDbkIsSUFBVTtRQURWLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUNqQixDQUFDO0lBRUgsc0NBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxLQUFVLEVBQUUsUUFBa0IsRUFBRSxVQUFzQjtRQUF2RSxpQkFpQkM7UUFoQkEsSUFBSSxVQUFVLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUMvQixVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1SixJQUFJLFVBQVUsR0FBRyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQUksVUFBVSxHQUFPLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDNUIsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDZixHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBUztZQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHVDQUFJLEdBQUosVUFBSyxHQUFXLEVBQUUsSUFBUyxFQUFFLFFBQWtCLEVBQUUsVUFBc0I7UUFDdEUsSUFBSSxVQUFVLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUMvQixVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzSixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBL0JGO1FBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7SUFpQ2IsK0JBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLGdDQUF3QiwyQkFnQ3BDLENBQUEifQ==