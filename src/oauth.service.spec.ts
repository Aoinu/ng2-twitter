import {
	Sha1Service
} from './sha1.service';
import {
	OAuthService
} from './oauth.service';

describe('OAuthService',()=>{
	let oauth : OAuthService;
	beforeEach(()=>{
		return oauth = new OAuthService(new Sha1Service());
	});

	it('can create authorizatioin header string.',()=>{
		let result = oauth.createHeaderString(
			'POST',
				'https://api.twitter.com/1/statuses/update.json',
				{
					status: 'Hello Ladies + Gentlemen, a signed OAuth request!',
					include_entities: true
				},
				{
					consumerKey: 'xvz1evFS4wEEPTGEFPHBog',
					consumerSecret: 'kAcSOqF21Fu85e7zjz7ZN2U4ZRhfV3WpwPAoE3Z7kBw'
				},
				{
					token: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
					tokenSecret: 'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE'
				},
				'kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg',
				'1318622958'
		);
		expect(result).toBe('OAuth oauth_consumer_key="xvz1evFS4wEEPTGEFPHBog", oauth_nonce="kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg", oauth_signature="tnnArxj06cWHq44gCs1OSKk%2FjLY%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1318622958", oauth_token="370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb", oauth_version="1.0"');
	});

	it('can encode string correctly.',()=>{
		expect(oauth.fixedEncodeURIComponent('Ladies + Gentlemen')).toBe('Ladies%20%2B%20Gentlemen');
		expect(oauth.fixedEncodeURIComponent('An encoded string!')).toBe('An%20encoded%20string%21');
		expect(oauth.fixedEncodeURIComponent('Dogs, Cats & Mice')).toBe('Dogs%2C%20Cats%20%26%20Mice');
		expect(oauth.fixedEncodeURIComponent('☃')).toBe('%E2%98%83');
	});

	it('does not create duplicated nonce.',()=>{
		expect(oauth.createNonce(10)).not.toBe(oauth.createNonce(10));
		expect(oauth.createNonce(10)).not.toBe(oauth.createNonce(10));
		expect(oauth.createNonce(10)).not.toBe(oauth.createNonce(10));
		expect(oauth.createNonce(10)).not.toBe(oauth.createNonce(10));
	});

	it('can sort parameters alphabetically.',()=>{
		let result = oauth.sortAlphabetically([
			{
				key: '6ghi',
				val: '2'
			},
			{
				key: 'jkl',
				val: '4'
			},
			{
				key: 'abc',
				val: '3'
			},
			{
				key: '1def',
				val: '1'
			}
		]);
		
		for(let i=0;i<4;i++){
			expect(result[i].val).toBe(1+i+"");
		}
	});

	it('can create signature base string.',()=>{
		let result = oauth.createSignatureBaseString(
			'POST',
			'https://api.twitter.com/1/statuses/update.json',
			oauth.createParameterString({
				status: 'Hello Ladies + Gentlemen, a signed OAuth request!',
				include_entities: true
			},{
				consumerKey: 'xvz1evFS4wEEPTGEFPHBog',
				consumerSecret: 'kAcSOqF21Fu85e7zjz7ZN2U4ZRhfV3WpwPAoE3Z7kBw'
			},
			{
				token: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
				tokenSecret: 'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE'
			},'kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg','1318622958')
		);
		expect(result).toBe('POST&https%3A%2F%2Fapi.twitter.com%2F1%2Fstatuses%2Fupdate.json&include_entities%3Dtrue%26oauth_consumer_key%3Dxvz1evFS4wEEPTGEFPHBog%26oauth_nonce%3DkYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1318622958%26oauth_token%3D370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb%26oauth_version%3D1.0%26status%3DHello%2520Ladies%2520%252B%2520Gentlemen%252C%2520a%2520signed%2520OAuth%2520request%2521');

	});


	it('can create oauth signature.',()=>{
		expect(
			oauth.createSignature(
				'POST',
				'https://api.twitter.com/1/statuses/update.json',
				{
					status: 'Hello Ladies + Gentlemen, a signed OAuth request!',
					include_entities: true
				},
				{
					consumerKey: 'xvz1evFS4wEEPTGEFPHBog',
					consumerSecret: 'kAcSOqF21Fu85e7zjz7ZN2U4ZRhfV3WpwPAoE3Z7kBw'
				},
				{
					token: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
					tokenSecret: 'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE'
				},
				'kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg',
				'1318622958'
			)
		).toBe(
			'tnnArxj06cWHq44gCs1OSKk/jLY='
		);
	});
	
});