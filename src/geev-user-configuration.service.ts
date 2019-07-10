import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var jQuery: any;
declare var geev: any;

@Injectable()
export class GeevUserConfigurationService {

    constructor(private _http: HttpClient) {
        
    }

    initialize(): void {
        this._http.get('/GeevUserConfiguration/GetAll')
            .subscribe(result => {
                jQuery.extend(true, geev, JSON.parse(JSON.stringify(result)));
            });
    }

}