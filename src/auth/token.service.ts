import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

    getToken(): string {
        return geev.auth.getToken();
    }

    getTokenCookieName(): string {
        return geev.auth.tokenCookieName;
    }

    clearToken(): void {
        geev.auth.clearToken();
    }

    setToken(authToken: string, expireDate?: Date): void {
        geev.auth.setToken(authToken, expireDate);
    }

}