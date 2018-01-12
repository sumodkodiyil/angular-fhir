import { AuthorizationCode } from './auth-code';
import { Configuration } from '../utils/configuration';

export class AccessTokenRequest {
    client_id: string;
    client_secret: string;
    grant_type: string;
    code: string;
    redirect_uri: string;

    constructor(authCode: AuthorizationCode){
        this.client_id = Configuration.applicationId;
        this.grant_type = "authorization_code";
        this.code = authCode.authCode;
        this.redirect_uri = Configuration.redirectUrl;
    }

    getFormDataUrlEncoded(): string{
        return `client_id=${this.client_id}&grant_type=${this.grant_type}&code=${this.code}&redirect_uri=${this.redirect_uri}`;
    }

}