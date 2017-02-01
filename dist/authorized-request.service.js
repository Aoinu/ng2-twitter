import { Headers } from '@angular/http';
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
    return AuthorizedRequestService;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplZC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aG9yaXplZC1yZXF1ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFFTixPQUFPLEVBRVAsTUFBTSxlQUFlO0FBU3RCO0lBQ0Msa0NBQ1MsS0FBbUIsRUFDbkIsSUFBVTtRQURWLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUNqQixDQUFDO0lBRUgsc0NBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxLQUFVLEVBQUUsUUFBa0IsRUFBRSxVQUFzQjtRQUF2RSxpQkFvQkM7UUFuQkEsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQixVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFOUosSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksVUFBVSxHQUFTLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDNUIsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDZixHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6QixVQUFVLElBQUksR0FBRyxDQUFDO1lBQ2xCLFVBQVUsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBUztnQkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsdUNBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxNQUFXLEVBQUUsUUFBa0IsRUFBRSxVQUFzQjtRQUF6RSxpQkFtQkM7UUFsQkEsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMvQixVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3RFLFVBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUdoSyxJQUFJLFVBQVUsR0FBUyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsR0FBRyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBUztZQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRiwrQkFBQztBQUFELENBQUMsQUFqREQsSUFpREMifQ==