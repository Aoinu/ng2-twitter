#ng2-twitter
Angular2 service of authorized request for twitter.

##Installation
Install through `npm`:

`npm install --save ng2-twitter`

##Usage
- Provider: `NG2_TWITTER_PROVIDERS`

```typescript
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AuthorizedRequestService, NG2_TWITTER_PROVIDERS } from 'ng2-twitter';
 
@Component({
  template: `
		<button (click)="getHomeTimeline()">get/home_timeline</button>
		<p>{{result}}</p>
  `,
  providers: [HTTP_PROVIDERS, NG2_TWITTER_PROVIDERS,]
})
export class YourApp {
	result: any = '';

	constructor(private twitter: AuthorizedRequestService){}

	getHomeTimeline(){
		twitter.get(
			'https://api.twitter.com/1.1/statuses/home_timeline.json',
			{
				count: 5
			},
			{
				consumerKey: 'CKey',
				consumerSecret: 'CSecret'
			},
			{
				token: 'Token',
				tokenSecret: 'TSecret'
			}
		).subscribe((res)=>{
			this.result = res;
		});
	}
}
```

##Note
In Web browser, JavaScript application cannot access external domain server because of Cross-Origin Resource Sharing.

This service supposes to be used in Cordova, Electron, Chrome Extensions or web security disabled browser.
