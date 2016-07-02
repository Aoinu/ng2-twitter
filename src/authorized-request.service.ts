import { Injectable } from '@angular/core';
import {
	Http,
	Headers,
	RequestOptionsArgs,
	Response
} from '@angular/http';
import { Observable } from 'rxjs';

import {
	OAuthService,
	OAuthKey,
	OAuthToken
} from './oauth.service';

@Injectable()
export class AuthorizedRequestService {
	constructor(
		private oauth: OAuthService,
		private http: Http
	){}

	get(url: string, query: any, oauthKey: OAuthKey, oauthToken: OAuthToken){
		let authHeader = new Headers();
		authHeader.append('Authorization',this.oauth.createHeaderString('GET',url,query,oauthKey,oauthToken,this.oauth.createNonce(),this.oauth.createTimestamp()));

		let requestUrl = url+'?';
		let queryArray:any = [];
		Object.keys(query).forEach((k)=>{
			queryArray.push({
				key: this.oauth.fixedEncodeURIComponent(k),
				val: this.oauth.fixedEncodeURIComponent(query[k])
			});
		});
		requestUrl += queryArray.map((param:any)=>{
			return param.key+'='+param.val;
		}).join('&');

		return this.http.get(requestUrl,{headers: authHeader});
	}

	post(url: string, body: any, oauthKey: OAuthKey, oauthToken: OAuthToken){
		let authHeader = new Headers();
		authHeader.append('Authorization',this.oauth.createHeaderString('GET',url,body,oauthKey,oauthToken,this.oauth.createNonce(),this.oauth.createTimestamp()));

		return this.http.post(url,JSON.stringify(body),{headers: authHeader});
	}

}