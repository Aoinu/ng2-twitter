import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { OAuthService, OAuthKey, OAuthToken } from './oauth.service';
export declare class AuthorizedRequestService {
    private oauth;
    private http;
    constructor(oauth: OAuthService, http: Http);
    get(url: string, query: any, oauthKey: OAuthKey, oauthToken: OAuthToken): Observable<Response>;
    post(url: string, params: any, oauthKey: OAuthKey, oauthToken: OAuthToken): Observable<Response>;
}
