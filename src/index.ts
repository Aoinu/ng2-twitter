export * from './sha1.service';
export * from './oauth.service';
export * from './authorized-request.service';

import { Sha1Service } from './sha1.service';
import { OAuthService } from './oauth.service';
import { AuthorizedRequestService } from './authorized-request.service';

export var NG2_TWITTER_PROVIDERS = [
	Sha1Service,
	OAuthService,
	AuthorizedRequestService,
];