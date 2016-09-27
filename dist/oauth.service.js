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
import { Sha1Service } from './sha1.service';
export var OAuthService = (function () {
    function OAuthService(sha1) {
        this.sha1 = sha1;
    }
    /**
     * Authorizing a request
     * https://dev.twitter.com/oauth/overview/authorizing-requests
     */
    OAuthService.prototype.createHeaderString = function (httpMethod, baseURL, requestParams, oauthKey, oauthToken, nonce, timestamp) {
        var headerStringArray = this.createParameterStringArray({}, oauthKey, oauthToken, nonce, timestamp);
        headerStringArray.push({
            key: 'oauth_signature',
            val: this.fixedEncodeURIComponent(this.createSignature(httpMethod, baseURL, requestParams, oauthKey, oauthToken, nonce, timestamp))
        });
        headerStringArray = this.sortAlphabetically(headerStringArray);
        return 'OAuth ' + headerStringArray.map(function (param) {
            return param.key + '="' + param.val + '"';
        }).join(', ');
    };
    OAuthService.prototype.createTimestamp = function () {
        return '' + Math.floor(((new Date()).getTime()) / 1000);
    };
    OAuthService.prototype.createNonce = function (length) {
        var nonceChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var result = '';
        for (var i = 0; i < length; ++i) {
            var rnum = Math.floor(Math.random() * nonceChars.length);
            result += nonceChars.substring(rnum, rnum + 1);
        }
        return result;
    };
    /**
     * Creating a signature
     * https://dev.twitter.com/oauth/overview/creating-signatures
     */
    OAuthService.prototype.createSignature = function (httpMethod, baseURL, requestParams, oauthKey, oauthToken, nonce, timestamp) {
        return this.calculateSignature(this.createSigningKey(oauthKey, oauthToken), this.createSignatureBaseString(httpMethod, baseURL, this.createParameterString(requestParams, oauthKey, oauthToken, nonce, timestamp)));
    };
    OAuthService.prototype.calculateSignature = function (signingKey, signatureBaseString) {
        return this.sha1.getHash(signingKey, signatureBaseString);
    };
    OAuthService.prototype.createSigningKey = function (oauthKey, oauthToken) {
        return oauthKey.consumerSecret + '&' + oauthToken.tokenSecret;
    };
    OAuthService.prototype.createSignatureBaseString = function (httpMethod, baseURL, parameterString) {
        return httpMethod + '&' + this.fixedEncodeURIComponent(baseURL) + '&' + this.fixedEncodeURIComponent(parameterString);
    };
    OAuthService.prototype.createParameterString = function (requestParams, oauthKey, oauthToken, nonce, timestamp) {
        var encodedParams = this.createParameterStringArray(requestParams, oauthKey, oauthToken, nonce, timestamp);
        encodedParams = this.sortAlphabetically(encodedParams);
        return encodedParams.map(function (param) {
            return param.key + '=' + param.val;
        }).join('&');
    };
    OAuthService.prototype.createParameterStringArray = function (requestParams, oauthKey, oauthToken, nonce, timestamp) {
        var _this = this;
        var encodedParams = [];
        Object.keys(requestParams).forEach(function (k) {
            encodedParams.push({
                key: _this.fixedEncodeURIComponent(k),
                val: _this.fixedEncodeURIComponent(requestParams[k])
            });
        });
        encodedParams.push({
            key: this.fixedEncodeURIComponent('oauth_consumer_key'),
            val: this.fixedEncodeURIComponent(oauthKey.consumerKey)
        }, {
            key: this.fixedEncodeURIComponent('oauth_signature_method'),
            val: this.fixedEncodeURIComponent('HMAC-SHA1')
        }, {
            key: this.fixedEncodeURIComponent('oauth_nonce'),
            val: this.fixedEncodeURIComponent(nonce)
        }, {
            key: this.fixedEncodeURIComponent('oauth_timestamp'),
            val: this.fixedEncodeURIComponent(timestamp)
        }, {
            key: this.fixedEncodeURIComponent('oauth_token'),
            val: this.fixedEncodeURIComponent(oauthToken.token)
        }, {
            key: this.fixedEncodeURIComponent('oauth_version'),
            val: this.fixedEncodeURIComponent('1.0')
        });
        return encodedParams;
    };
    OAuthService.prototype.sortAlphabetically = function (params) {
        params.sort(function (a, b) {
            if (a.key > b.key)
                return 1;
            if (a.key < b.key)
                return -1;
            else
                return 0;
        });
        return params;
    };
    OAuthService.prototype.fixedEncodeURIComponent = function (str) {
        return encodeURIComponent(str)
            .replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
        // .replace('%20', function(c) {
        // 	return '%2520';
        // });
    };
    OAuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Sha1Service])
    ], OAuthService);
    return OAuthService;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9vYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZTtPQUVuQyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQjtBQUc1QztJQUNDLHNCQUNTLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDeEIsQ0FBQztJQUVIOzs7T0FHRztJQUNILHlDQUFrQixHQUFsQixVQUFtQixVQUFrQixFQUFFLE9BQWUsRUFBRSxhQUFrQixFQUFFLFFBQWtCLEVBQUUsVUFBc0IsRUFBRSxLQUFhLEVBQUUsU0FBaUI7UUFDdkosSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hHLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUN0QixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEdBQUcsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxTQUFTLENBQUMsQ0FBQztTQUM3SCxDQUFDLENBQUM7UUFFSCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUvRCxNQUFNLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUM7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