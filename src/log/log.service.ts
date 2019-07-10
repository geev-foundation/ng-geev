import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    debug(logObject?: any): void {
        geev.log.debug(logObject);
    }

    info(logObject?: any): void {
        geev.log.info(logObject);
    }

    warn(logObject?: any): void {
        geev.log.warn(logObject);
    }

    error(logObject?: any): void {
        geev.log.error(logObject);
    }

    fatal(logObject?: any): void {
        geev.log.fatal(logObject);
    }

}