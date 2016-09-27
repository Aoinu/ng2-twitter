export * from './sha1.service';
export * from './oauth.service';
export * from './authorized-request.service';

import {
	NgModule
} from '@angular/core';
import {
	HttpModule
} from '@angular/http';

import { Sha1Service } from './sha1.service';
import { OAuthService } from './oauth.service';
import { AuthorizedRequestService } from './authorized-request.service';

@NgModule({
	imports: [HttpModule],
	providers: [
		Sha1Service,
		OAuthService,
		AuthorizedRequestService
	]
})
export class Ng2TwitterModule{}