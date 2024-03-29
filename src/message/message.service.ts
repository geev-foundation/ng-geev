﻿import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

    info(message: string, title?: string, isHtml?: boolean): any {
        return geev.message.info(message, title, isHtml);
    }

    success(message: string, title?: string, isHtml?: boolean): any {
        return geev.message.success(message, title, isHtml);
    }

    warn(message: string, title?: string, isHtml?: boolean): any {
        return geev.message.warn(message, title, isHtml);
    }

    error(message: string, title?: string, isHtml?: boolean): any {
        return geev.message.error(message, title, isHtml);
    }

    confirm(message: string, callback?: (result: boolean) => void): any;
    confirm(message: string, title?: string, callback?: (result: boolean) => void, isHtml?: boolean): any;

    confirm(message: string, titleOrCallBack?: string | ((result: boolean) => void), callback?: (result: boolean) => void, isHtml?: boolean): any {
        if (typeof titleOrCallBack == 'string') {
            return geev.message.confirm(message, titleOrCallBack as string, callback, isHtml);
        } else {
            return geev.message.confirm(message, undefined, titleOrCallBack as ((result: boolean) => void), isHtml);
        }
    }

}