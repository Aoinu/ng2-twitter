export var OAuthService = (function () {
    function OAuthService(sha1) {
        this.sha1 = sha1;
    }
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
    };
    return OAuthService;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9vYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBQ0Msc0JBQ1MsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUN4QixDQUFDO0lBTUgseUNBQWtCLEdBQWxCLFVBQW1CLFVBQWtCLEVBQUUsT0FBZSxFQUFFLGFBQWtCLEVBQUUsUUFBa0IsRUFBRSxVQUFzQixFQUFFLEtBQWEsRUFBRSxTQUFpQjtRQUN2SixJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQ3RCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdILENBQUMsQ0FBQztRQUVILGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSztZQUM3QyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDQyxNQUFNLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksTUFBYztRQUN6QixJQUFNLFVBQVUsR0FBRywrREFBK0QsQ0FBQztRQUNuRixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxNQUFNLEVBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsTUFBTSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFDLElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFNRCxzQ0FBZSxHQUFmLFVBQWdCLFVBQWtCLEVBQUUsT0FBZSxFQUFFLGFBQWtCLEVBQUUsUUFBa0IsRUFBRSxVQUFzQixFQUFFLEtBQWEsRUFBRSxTQUFpQjtRQUNwSixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLFFBQVEsRUFDUixVQUFVLENBQ1YsRUFDRCxJQUFJLENBQUMseUJBQXlCLENBQzdCLFVBQVUsRUFDVixPQUFPLEVBQ1AsSUFBSSxDQUFDLHFCQUFxQixDQUN6QixhQUFhLEVBQ2IsUUFBUSxFQUNSLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxDQUNULENBQ0QsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELHlDQUFrQixHQUFsQixVQUFtQixVQUFrQixFQUFFLG1CQUEyQjtRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixRQUFrQixFQUFFLFVBQXNCO1FBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFDLEdBQUcsR0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQzNELENBQUM7SUFFRCxnREFBeUIsR0FBekIsVUFBMEIsVUFBa0IsRUFBRSxPQUFlLEVBQUUsZUFBdUI7UUFDckYsTUFBTSxDQUFDLFVBQVUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVELDRDQUFxQixHQUFyQixVQUFzQixhQUFrQixFQUFFLFFBQWtCLEVBQUUsVUFBc0IsRUFBRSxLQUFhLEVBQUUsU0FBaUI7UUFDckgsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUzRyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSztZQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQsaURBQTBCLEdBQTFCLFVBQTJCLGFBQWtCLEVBQUUsUUFBa0IsRUFBRSxVQUFzQixFQUFFLEtBQWEsRUFBRSxTQUFpQjtRQUEzSCxpQkFxQ0M7UUFwQ0EsSUFBSSxhQUFhLEdBQWEsRUFBRSxDQUFDO1FBRWpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNwQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNsQixHQUFHLEVBQUUsS0FBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztnQkFDcEMsR0FBRyxFQUFFLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxhQUFhLENBQUMsSUFBSSxDQUNqQjtZQUNDLEdBQUcsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUM7WUFDdkQsR0FBRyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBQ3ZELEVBQ0Q7WUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDO1lBQzNELEdBQUcsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1NBQzlDLEVBQ0Q7WUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQztZQUNoRCxHQUFHLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQztTQUN4QyxFQUNEO1lBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRCxHQUFHLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztTQUM1QyxFQUNEO1lBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7WUFDaEQsR0FBRyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ25ELEVBQ0Q7WUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztZQUNsRCxHQUFHLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQztTQUN4QyxDQUNELENBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3RCLENBQUM7SUFHRCx5Q0FBa0IsR0FBbEIsVUFBbUIsTUFBZ0I7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUssRUFBRSxDQUFLO1lBQ3hCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSTtnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFRCw4Q0FBdUIsR0FBdkIsVUFBd0IsR0FBVztRQUNsQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDO2FBQzVCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBUyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFJTCxDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDLEFBL0lELElBK0lDIn0=