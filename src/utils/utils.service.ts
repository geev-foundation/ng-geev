import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    getCookieValue(key: string): string {
        return geev.utils.getCookieValue(key);
    }

    setCookieValue(key: string, value: string, expireDate?: Date, path?: string): void {
        geev.utils.setCookieValue(key, value, expireDate, path);
    }

    deleteCookie(key: string, path?: string): void {
        geev.utils.deleteCookie(key, path);
    }

}