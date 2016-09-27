import {
	Sha1Service
} from './sha1.service';

describe('Sha1Service',()=>{
	
	let sha1: Sha1Service = new Sha1Service();

	it('is defined.',()=>{
		expect(sha1).toBeDefined();
	});

	it('key: hogehoge text: hugahuga into: Go9RNpZ4Nvnbzzi0hlCn2qHQEGQ=',()=>{
		const hash = sha1.getHash('hogehoge','hugahuga');
		expect(hash).toBe('Go9RNpZ4Nvnbzzi0hlCn2qHQEGQ=');
	});
	it('key: qwerty text: asdfg into: oS8gp1WP/FLYQpbP5ygaadFDGCE=',()=>{
		const hash = sha1.getHash('qwerty','asdfg');
		expect(hash).toBe('oS8gp1WP/FLYQpbP5ygaadFDGCE=');
	});
});