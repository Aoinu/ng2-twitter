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
import { Http, Headers } from '@angular/http';
import { OAuthService } from './oauth.service';
export var AuthorizedRequestService = (function () {
    function AuthorizedRequestService(oauth, http) {
        this.oauth = oauth;
        this.http = http;
    }
    AuthorizedRequestService.prototype.get = function (url, query, oauthKey, oauthToken) {
        var _this = this;
        var authHeader = new Headers();
        authHeader.append('Authorization', this.oauth.createHeaderString('GET', url, query, oauthKey, oauthToken, this.oauth.createNonce(10), this.oauth.createTimestamp()));
        var requestUrl = url;
        var queryArray = [];
        Object.keys(query).forEach(function (k) {
            queryArray.push({
                key: _this.oauth.fixedEncodeURIComponent(k),
                val: _this.oauth.fixedEncodeURIComponent(query[k])
            });
        });
        if (queryArray.length > 0) {
            requestUrl += '?';
            requestUrl += queryArray.map(function (param) {
                return param.key + '=' + param.val;
            }).join('&');
        }
        return this.http.get(requestUrl, { headers: authHeader });
    };
    AuthorizedRequestService.prototype.post = function (url, params, oauthKey, oauthToken) {
        var _this = this;
        var authHeader = new Headers();
        authHeader.append('Content-Type', 'application/x-www-form-urlencoded');
        authHeader.append('Authorization', this.oauth.createHeaderString('POST', url, params, oauthKey, oauthToken, this.oauth.createNonce(10), this.oauth.createTimestamp()));
        var paramArray = [];
        Object.keys(params).forEach(function (k) {
            paramArray.push({
                key: _this.oauth.fixedEncodeURIComponent(k),
                val: _this.oauth.fixedEncodeURIComponent(params[k])
            });
        });
        paramArray = this.oauth.sortAlphabetically(paramArray);
        var body = paramArray.map(function (param) {
            return param.key + '=' + param.val;
        }).join('&');
        return this.http.post(url, body, { headers: authHeader });
    };
    AuthorizedRequestService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [OAuthService, Http])
    ], AuthorizedRequestService);
    return AuthorizedRequestService;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplZC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aG9yaXplZC1yZXF1ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlO09BQ25DLEVBQ04sSUFBSSxFQUNKLE9BQU8sRUFFUCxNQUFNLGVBQWU7T0FHZixFQUNOLFlBQVksRUFHWixNQUFNLGlCQUFpQjtBQUd4QjtJQUNDLGtDQUNTLEtBQW1CLEVBQ25CLElBQVU7UUFEVixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQU07SUFDakIsQ0FBQztJQUVILHNDQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsS0FBVSxFQUFFLFFBQWtCLEVBQUUsVUFBc0I7UUFBdkUsaUJBb0JDO1FBbkJBLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlKLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLFVBQVUsR0FBUyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1lBQzVCLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsR0FBRyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDekIsVUFBVSxJQUFJLEdBQUcsQ0FBQztZQUNsQixVQUFVLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVM7Z0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHVDQUFJLEdBQUosVUFBSyxHQUFXLEVBQUUsTUFBVyxFQUFFLFFBQWtCLEVBQUUsVUFBc0I7UUFBekUsaUJBbUJDO1FBbEJBLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUN0RSxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHaEssSUFBSSxVQUFVLEdBQVMsRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNmLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztnQkFDMUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xELENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVM7WUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBaERGO1FBQUMsVUFBVSxFQUFFOztnQ0FBQTtJQWtEYiwrQkFBQztBQUFELENBQUMsQUFqREQsSUFpREMifQ==