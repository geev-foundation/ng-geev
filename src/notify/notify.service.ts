import { Injectable } from '@angular/core';

@Injectable()
export class NotifyService {

    info(message: string, title?: string, options?: any): void {
        geev.notify.info(message, title, options);
    }

    success(message: string, title?: string, options?: any): void {
        geev.notify.success(message, title, options);
    }

    warn(message: string, title?: string, options?: any): void {
        geev.notify.warn(message, title, options);
    }

    error(message: string, title?: string, options?: any): void {
        geev.notify.error(message, title, options);
    }

}