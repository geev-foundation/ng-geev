import { Injectable } from '@angular/core';

@Injectable()
export class PermissionCheckerService {

    isGranted(permissionName: string): boolean {
        return geev.auth.isGranted(permissionName);
    }

}