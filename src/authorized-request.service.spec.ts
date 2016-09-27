import {
	Injector
} from '@angular/core';
import {
	TestBed,
	getTestBed
} from '@angular/core/testing';
import 'rxjs/add/operator/map';

import {
	Http,
	HttpModule,
	Response
} from '@angular/http';
import {
	Sha1Service
} from './sha1.service';
import {
	OAuthService
} from './oauth.service';
import {
	AuthorizedRequestService
} from './authorized-request.service';

import {
	appkey,
	token
} from './apikeys';

describe('AuthorizedRequestService',()=>{
	let injecter: Injector;
	let request : AuthorizedRequestService;
	beforeEach(()=>{
		TestBed.configureTestingModule({
			imports: [HttpModule]
		});
		injecter = getTestBed();

		request = new AuthorizedRequestService(
			new OAuthService(new Sha1Service),
			injecter.get(Http)
		);
	});

	it('can get 5 tweets from home_timeline.',(done)=>{
		request.get(
			'https://api.twitter.com/1.1/statuses/home_timeline.json',
			{
				count:5
			},
			appkey,
			token
		).map(res => res.json())
		.subscribe(
			(res: any[])=>{
				expect(res.length).toBe(5);
				done();
			},(err: Response)=>{
				expect(err.status).toBe(200);
				done();
			}
		);
	});

	it('can get 20 tweets from home_timeline.',(done)=>{
		request.get(
			'https://api.twitter.com/1.1/statuses/home_timeline.json',
			{
			},
			appkey,
			token
		).map(res => res.json())
		.subscribe(
			(res: any[])=>{
				expect(res.length).toBe(20);
				done();
			},(err: Response)=>{
				expect(err.status).toBe(200);
				done();
			}
		);
	});

	it('can update status.',(done)=>{
		request.post(
			'https://api.twitter.com/1.1/statuses/update.json',
			{
				status: "hoge hoge"
			},
			appkey,
			token
		).map(res => res.json())
		.subscribe(
			(res)=>{
				expect(res.text).toBe("hoge hoge");
				done();
			},(err)=>{
				expect(err.status).toBe(200);
				done();
			}
		);
	});
});