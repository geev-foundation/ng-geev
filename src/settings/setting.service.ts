import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {

    get(name: string): string {
        return geev.setting.get(name);
    }

    getBoolean(name: string): boolean {
        return geev.setting.getBoolean(name);
    }
    
    getInt(name: string): number {
        return geev.setting.getInt(name);
    }

}