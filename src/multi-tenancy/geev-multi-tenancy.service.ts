import { Injectable } from '@angular/core';

@Injectable()
export class GeevMultiTenancyService {

    get isEnabled(): boolean {
        return geev.multiTenancy.isEnabled;
    }

}