#ng2-twitter
Angular2 service of authorized request for twitter.

##Installation
Install through `npm`:

`npm install --save ng2-twitter`

##Usage
- Module: `Ng2TwitterModule`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2TwitterModule } from 'ng2-twitter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2TwitterModule //Add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
import { Component } from '@angular/core';
import { AuthorizedRequestService } from 'ng2-twitter';

@Component({
  selector: 'app-root',
  template: `
		<h1>{{title}}</h1>
		<button (click)="getHomeTimeline()">get/home_timeline</button>
		<p>{{result}}</p>
	`
})
export class AppComponent {
  title = 'app works!';
  result = '';
  constructor(private twitter: AuthorizedRequestService){ }

  getHomeTimeline(){
    this.twitter.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      {
        count: 5
      },
      {
        consumerKey: 'consumerKey',
        consumerSecret: 'consumerSecret'
      },
      {
        token: 'token',
        tokenSecret: 'tokenSecret'
      }
  ).subscribe((res)=>{
      this.result = res.json().map(tweet => tweet.text);
  });
  }
}
```

##Note
In Web browser, JavaScript application cannot access external domain server because of Cross-Origin Resource Sharing.

This service supposes to be used in Cordova, Electron, Chrome Extensions or web security disabled browser.
