import { Sha1Service } from './sha1.service';
export declare class OAuthService {
    private sha1;
    constructor(sha1: Sha1Service);
    /**
     * Authorizing a request
     * https://dev.twitter.com/oauth/overview/authorizing-requests
     */
    createHeaderString(httpMethod: string, baseURL: string, requestParams: any, oauthKey: OAuthKey, oauthToken: OAuthToken, nonce: string, timestamp: string): string;
    createTimestamp(): string;
    createNonce(): string;
    /**
     * Creating a signature
     * https://dev.twitter.com/oauth/overview/creating-signatures
     */
    createSignature(httpMethod: string, baseURL: string, requestParams: any, oauthKey: OAuthKey, oauthToken: OAuthToken, nonce: string, timestamp: string): string;
    calculateSignature(signingKey: string, signatureBaseString: string): string;
    createSigningKey(oauthKey: OAuthKey, oauthToken: OAuthToken): string;
    createSignatureBaseString(httpMethod: string, baseURL: string, parameterString: string): string;
    createParameterString(requestParams: any, oauthKey: OAuthKey, oauthToken: OAuthToken, nonce: string, timestamp: string): string;
    createParameterStringArray(requestParams: any, oauthKey: OAuthKey, oauthToken: OAuthToken, nonce: string, timestamp: string): Params[];
    sortAlphabetically(params: Params[]): Params[];
    fixedEncodeURIComponent(str: string): string;
}
export interface OAuthKey {
    consumerKey: string;
    consumerSecret: string;
}
export interface OAuthToken {
    token: string;
    tokenSecret: string;
}
export interface Params {
    key: string;
    val: string;
}
