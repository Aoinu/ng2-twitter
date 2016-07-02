import {
	it,
	inject,
	beforeEachProviders
} from '@angular/core/testing';
import { provide } from '@angular/core';
import {
	HTTP_PROVIDERS,
	XHRBackend,
	Response,
	ResponseOptions
} from '@angular/http';
import { MockBackend,MockConnection } from '@angular/http/testing';
import 'rxjs/add/operator/map';

import {
	Sha1Service
} from './sha1.service';
import {
	OAuthService
} from './oauth.service';
import {
	AuthorizedRequestService
} from './authorized-request.service';

describe('AuthorizedRequestService',()=>{
	beforeEachProviders(()=>{
		return [
			Sha1Service,
			OAuthService,
			HTTP_PROVIDERS,
			provide(XHRBackend, {useClass: MockBackend}),
			AuthorizedRequestService
		];
	});

	it('can get home_timeline.',inject([XHRBackend,AuthorizedRequestService],(mock: MockBackend, authRequest: AuthorizedRequestService)=>{
			mock.connections.subscribe((connection: MockConnection)=>{
				connection.mockRespond(new Response(
					new ResponseOptions({
						body: []
					})
				));
			});
			let spyFnc = jasmine.createSpy('');


			authRequest.get(
				'https://api.twitter.com/1.1/statuses/home_timeline.json',
				{
				},
				{
					consumerKey: '',
					consumerSecret: ''
				},
				{
					token: '',
					tokenSecret: ''
				}
			).map(res => res.json())
			.subscribe(
				(res)=>{
					spyFnc();
					expect(spyFnc).toHaveBeenCalled();
				},(err)=>{
					expect(spyFnc).toHaveBeenCalled();
				}
			);

		})
	);

});