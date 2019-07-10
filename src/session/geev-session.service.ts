import { Injectable } from '@angular/core';

@Injectable()
export class GeevSessionService {

    get userId(): number | undefined {
        return geev.session.userId;
    }

    get tenantId(): number | undefined {
        return geev.session.tenantId;
    }

    get impersonatorUserId(): number | undefined {
        return geev.session.impersonatorUserId;
    }

    get impersonatorTenantId(): number | undefined {
        return geev.session.impersonatorTenantId;
    }

    get multiTenancySide(): geev.multiTenancy.sides {
        return geev.session.multiTenancySide;
    }

}