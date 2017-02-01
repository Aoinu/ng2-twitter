import * as jssha from 'jssha';

export class Sha1Service {
	constructor(){}

	private _jssha: jssha.jsSHA = jssha;

	getHash(key:string,text:string){
		let shaObj = new this._jssha("SHA-1","TEXT");
		shaObj.setHMACKey(key,"TEXT");
		shaObj.update(text);
		return shaObj.getHMAC("B64");
	}

}