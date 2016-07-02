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
var sha1_service_1 = require('./sha1.service');
var OAuthService = (function () {
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
    OAuthService.prototype.createNonce = function () {
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
        return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    };
    OAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [sha1_service_1.Sha1Service])
    ], OAuthService);
    return OAuthService;
}());
exports.OAuthService = OAuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9vYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFHN0M7SUFDQyxzQkFDUyxJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQ3hCLENBQUM7SUFFSDs7O09BR0c7SUFDSCx5Q0FBa0IsR0FBbEIsVUFBbUIsVUFBa0IsRUFBRSxPQUFlLEVBQUUsYUFBa0IsRUFBRSxRQUFrQixFQUFFLFVBQXNCLEVBQUUsS0FBYSxFQUFFLFNBQWlCO1FBQ3ZKLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNoRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDdEIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixHQUFHLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0gsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLO1lBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLElBQUksR0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQs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